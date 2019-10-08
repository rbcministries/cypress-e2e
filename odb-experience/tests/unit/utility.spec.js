import 'core-js'
import {expect} from 'chai';
import {safeGet, safeGetGlobal, formatStringReplace} from "../../src/components/utility";

describe('Utility functions', ()=>{
  describe('safeGet',()=>{
    it('safeGet Returns 1 given object and string', () => {
      let object = {
        a: {
          b: 1
        }
      };
      let path = 'a.b';
      expect(safeGet(object, path)).to.equal(1)
    });
  
    it("safeGet Returns null given object and string path that doesn't exist", () => {
      let object = {
        a: {
          b: 1
        }
      };
      let path = 'a.c';
      expect(safeGet(object, path)).to.be.null;
    });
    it('safeGet Returns object given object and string path', () => {
      let object = {
        a: {
          b: {
            c: 1
          }
        }
      };
      let path = 'a.b';
      expect(safeGet(object, path)).to.deep.equal({c: 1});
    });
    it('safeGet Returns 1 given object and array path', () => {
      let object = {
        a: {
          b: 1
        }
      };
      let path = ['a', 'b'];
      expect(safeGet(object, path)).to.equal(1);
    });
    it('safeGet Returns null given null and array path', () => {
      let object = null;
      let path = ['a', 'b'];
      expect(safeGet(object, path)).to.be.null;
    });
    it('safeGet Returns null given object and not a string or array for path', () => {
      let object = {
        a: {
          b: 1
        }
      };
      let path = {a:1};
      expect(safeGet(object, path)).to.be.null;
    });
  });
  describe("safeGetGlobal", ()=>{
    it('safeGetGlobal Returns 1 given object and array path', () => {
      let object = {
        a: {
          b: 1
        }
      };
      let path = ['a', 'b'];
      expect(safeGetGlobal(object, path)).to.equal(1);
    });
  
    it('safeGetGlobal Returns 2 given object and array path and need to fallback to global', () => {
      let object = {
        a: {
          c: 1
        },
        global:{
          b:2
        }
      };
      let path = ['a', 'b'];
      expect(safeGetGlobal(object, path)).to.equal(2);
    });
    it('safeGetGlobal Returns 2 given object and string path and need to fallback to global', () => {
      let object = {
        a: {
          c: 1
        },
        global: {
          b: 2
        }
      };
      let path = 'a.b';
      expect(safeGetGlobal(object, path)).to.equal(2);
    });
    it('safeGetGlobal Returns 2 and reports that it is global given object and string path and need to fallback to global', () => {
      let object = {
        a: {
          c: 1
        },
        global: {
          b: 2
        }
      };
      let path = 'a.b';
      expect(safeGetGlobal(object, path,true)).to.eql({value:2,isGlobal:true});
    });
    it('safeGetGlobal Returns 1 and reports that it is not global given object and string path and need to fallback to global', () => {
      let object = {
        a: {
          c: 1
        },
        global: {
          b: 2
        }
      };
      let path = 'a.c';
      expect(safeGetGlobal(object, path, true)).to.eql({value: 1, isGlobal: false});
    });
    it('safeGetGlobal Returns null given object and string path and need to fallback to global that does not exist', () => {
      let object = {
        a: {
          c: 1
        },
        global: {
          b: 2
        }
      };
      let path = 'a.d';
      expect(safeGetGlobal(object, path)).to.be.null;
    });
  })
  describe('formatStringReplace',()=>{
    it('formatString Returns all formats replaced', () => {
      let format='This is a %1$s to check if this %2$s';
      expect(formatStringReplace(format, ['test','works'])).to.equal('This is a test to check if this works');
    });
    it('formatString Returns all formats replaced multiple of 1', () => {
      let format = 'This is a %1$s to check if this %1$s';
      expect(formatStringReplace(format, ['test'])).to.equal('This is a test to check if this test');
    });
  })
});