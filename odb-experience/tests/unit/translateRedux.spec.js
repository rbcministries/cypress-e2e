import 'core-js'
import 'regenerator-runtime/runtime'
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {setLanguage, getTranslations} from '../../src/store/actions/language';
import * as actionTypes from "../../src/store/actions/actionTypes";
import moxios from 'moxios';
import { expect } from 'chai';
import sinon from 'sinon';

const middleware = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middleware);
let store;
const translationAPI = 'https://3662w03kbi.execute-api.us-east-1.amazonaws.com/beta/translation/language?language=en_US';

describe('Translate language redux actions',()=>{
  beforeEach(()=>{
    moxios.install();
    const initialState = {language:{
      type: actionTypes.SET_LANGUAGE,
      payload: {
        name: 'English',
        code: 'en_US',
        fetching:false,
        translation: {}
      }
    }};
    store = mockStore(initialState);
  });
  
  afterEach(()=>{
    moxios.uninstall();
  });
  
  it('Should retrieve English translation file', async ()=>{
    moxios.stubRequest(translationAPI,{
      status:200,
      response: {
        "all_terms": [
          {
            "language": "en_US",
            "term": "account#test",
            "translation": "test"
          },
        ]
      }
    });
    return store.dispatch(setLanguage({
      name: 'English',
      code: 'en_US'
    }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).to.eql({type: actionTypes.FETCH_TRANSLATION});
      expect(actions[1]).to.eql({
        type: actionTypes.SET_LANGUAGE,
        payload: {
          name: 'English',
          code: 'en_US',
          translation: {
            "account": {"test": "test"}
          }
        }
      })
    })
  });
  
  it('Should retrieve English translation file but log warning because not passing in language', () => {
    moxios.stubRequest(translationAPI, {
      status: 200,
      response: {
        "all_terms": [
          {
            "language": "en_US",
            "term": "account#test",
            "translation": "test"
          },
        ]
      }
    });
    sinon.stub(console, 'warn').calledOnce;
    return store.dispatch(setLanguage())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).to.eql({type: actionTypes.FETCH_TRANSLATION});
      expect(actions[1]).to.eql({
        type: actionTypes.SET_LANGUAGE,
        payload: {
          name: 'English',
          code: 'en_US',
          translation: {
            "account": {"test": "test"}
          }
        }
      })
    })
  })
  
  it('Should retrieve English translation and parse without using dispatch', async () => {
    moxios.stubRequest(translationAPI, {
      status: 200,
      response: {
        "all_terms": [
          {
            "language": "en_US",
            "term": "account#test",
            "translation": "test"
          },
        ]
      }
    });
    let translation = await getTranslations({code: 'en_US'});
    expect(translation).to.eql({"account": {"test": "test"}})
  })
  it('Should retrieve English translation and return sections', async () => {
    moxios.stubRequest(translationAPI, {
      status: 200,
      response: {
        "all_terms": [
          {
            "language": "en_US",
            "term": "account#test",
            "translation": "test",
            "section": "test"
          },
        ]
      }
    });
    let translation = await getTranslations({code: 'en_US'}, null, true);
    expect(translation).to.eql({
      translations: {
        "account": {
          "test": "test"
        }
      },
      sections:{
        "test":['account.test']
      }
    })
  })
});