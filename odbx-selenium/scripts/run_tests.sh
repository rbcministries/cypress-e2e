aws ssm send-command --document-name "pi-run-tests" --document-version "3" --targets '[{"Key":"InstanceIds","Values":["mi-05f58b6fcc1c8d27e"]}]' --parameters '{}' --timeout-seconds 600 --max-concurrency "50" --max-errors "0" --output-s3-bucket-name "odbwebteam" --output-s3-key-prefix "raspberrypi" --region us-east-1


