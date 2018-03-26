
# hello-dynamodb 
Create a dynamodb object that can be used in a meteor project instead of MongoDB 

## Project setup 
```
  meteor create hello-dynamodb --release 1.6.1 
  meteor npm install react react-dom prop-types aws-sdk uuid --save 

```


## AWS CLI  Dynamodb Commands

## Scan all items in the table 
```
  aws dynamodb scan --table-name player  --endpoint-url http://localhost:8000

```
