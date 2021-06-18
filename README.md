
# ParcialProgramacion

Crear un proyecto:

npm init -y


Dependencias que hay que instalar:

npm i express

npm i dotenv

npm i sequelize mysql2

---------------------------

Crear los archivos=

.gitignore ( para ignorar los archivos de Git). 

.env (Para declarar las variables de entorno).

.sequelizerc.

Dependencias a instalar de Desarrollo:

npm i sequelize-cli --D

Pasos para crear modelos de sequelize:

sequelize model:generate --name Brand --attributes name:string

sequelize model:generate --name Category --attributes name:string

sequelize model:generate --name Gender --attributes name:string

sequelize model:generate --name Size --attributes name:string

sequelize model:generate --name Image --attributes name:string,url:string,description:string

sequelize model:generate --name State --attributes name:string

sequelize model:generate --name Address --attributes street:string,number:integer,state_id:integer

sequelize model:generate --name Role --attributes description:string

sequelize model:generate --name User --attributes first_name:string,last_name:string,username:string,email:string,password:string,address_id:integer

sequelize model:generate --name Payment --attributes type:string

sequelize model:generate --name Shipping --attributes type:string,date:date,address_id:integer

sequelize model:generate --name Order --attributes number:integer,date:date,user_id:integer,payment_id:integer,shipping_id:integer

sequelize model:generate --name Product --attributes name:string,price:decimal,brand_id:integer,category_id:integer,size_id:integer,gender_id:integer,image_id:integer

sequelize model:generate --name OrderDetail --attributes quantity:decimal,subtotal:decimal,order_id:integer,product_id:integer

sequelize model:generate --name UserRole --attributes user_id:integer,role_id:integer

-------------------------------

Para hacer la migracion se tiene que poner el comando

sequelize db:migrate

![Captura de pantalla (2)](https://user-images.githubusercontent.com/83315050/122623801-ec58ef80-d073-11eb-86a1-8bbc72a83091.png)
