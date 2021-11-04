# GUIDELINE
This repository provide awesomeness of fake api related to ecommerce field.  
*Created with love  by Natsir* :sunglasses:

## Head over to
- todo.md : talks about top priority tasks
- discussions.md : talks about branching strategy and packages (for now).


## Available API
1. Products
   1. Add Product
   2. Get All Products
   3. Get Product Detail
   4. Update Product
   5. Delete Product
2. TBD
3. TBD

## How To Use
Currently there is no authentication required to consume apis. No need to worry about.

If you are postman user, you can download the following [postmane collection](https://drive.google.com/file/d/1IXodfyEJvOie6oy2wTYXZtsfvKFUrU4m/view?usp=sharing).

```
BASE URL: https://fake-api-tf.herokuapp.com/api
```
1. API Products
   ```
   1. Add Product
      POST
      {{BASE URL}}/products
      REQUEST BODY (JSON)
      
      example of request body:
      {
        "name": "adidas yeezy boost 350",
        "brand": "id brand adidas",
        "colors": [
            "red",
            "green",
            "white"
        ],
        "price": 4000000
      }

      STATUS CODE Available:
      1. 201, means request added succefully.
      2. 500, means request general error.

   2. Get All Products
      GET
      {{BASE URL}}/products

      STATUS CODE Available:
      1. 200, means request served succefully.

   3. Get Product Detail
      GET
      {{BASE URL}}/products/:id

      example url:
      {{BASE URL}}/products/1

      STATUS CODE Available:
      1. 200, means request served succefully.
      2. 500, means request general error.

   4. Update Product
      PUT
      {{BASE URL}}/products/:id

      example url:
      {{BASE URL}}/products/1

      STATUS CODE Available:
      1. 200, means request served succefully.
      2. 500, means request general error.
   
   5. Delete Product
      DELETE
      {{BASE URL}}/products/:id

      example url:
      {{BASE URL}}/products/1

      STATUS CODE Available:
      1. 204, means request served succefully.
      2. 500, means request general error.
   ```
2. TBD
3. TBD

## Limitation with Current Version
API (add and get products) is connected to mongodb locally, not deploy yet.

## Next Release
These are top four issues that we care most about.
1. API Orders, Payments, Users.
2. Fixing Status Code
3. Unit tests.

Create pull request if you would like to contribute to this awesome project. Or just create issue if you want to discuss something (hope not abour error lol) or just chilling suggest next billion dollar feature.
