# next-product-catalog
This app is an exercise from </salt> PGP to learn NEXT.JS

![Landing](/next-products-app/landing.png)
![Product Page](/next-products-app/idpage.png)
Product navigation application that lists, shows details and search a list of products. 

The application should support the following features:
Step 1#
List all products - show title, image, price and category in the list 
Show details for one of the products (show all the
data) 
Filter the product list on categories

Step 2#
1. Get the data directly from the FakeStore-API (https://fakestoreapi.com/)
2. Use server-side rendering to improve the initial load time: 
On getServerSideProps fetch the data from the FakeStore API and pass it into the component
Create a getStaticProps to generate the data on build time
Implement getStaticPaths and implement a separate /details/:id page

Extra Step# 
Add new product
Update product data 
Delete a product 
Add a freetext search that searches for a value in any field 




