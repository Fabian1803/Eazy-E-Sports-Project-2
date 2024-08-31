use ProyFullBD

create table user_store (
	id_user int primary key identity(1,1),
	name_user varchar(25) not null,
	last_name_user varchar(30) not null,
	mail_user varchar(40) not null,
	password_user varchar(25) not null,
	address_user varchar(20),
	phone_number_user varchar(15),
	created_at_user datetime,
	update_at_user datetime
);

create table roles(
	id_rol int primary key identity(1,1),
	name_rol varchar(10) not null,
	description_rol varchar(50) not null
);

create table user_roles(
	id_user_roles int primary key identity(1,1),
	id_user int not null,
	id_rol int not null,
	constraint fk_user_user_roles
		foreign key (id_user)
		references user_store(id_user)
		on delete cascade,
	constraint fk_roles_user_roles
		foreign key (id_rol)
		references roles(id_rol)
		on delete cascade
);

create table activities(
	id_activity int primary key identity(1,1),
	id_user int not null,
	type_activity varchar(15) not null,
	decription_activity varchar(25) not null,
	create_at_activity datetime not null,
	constraint fk_user_activities
		foreign key (id_user)
		references user_store(id_user)
		on delete cascade
);

create table cart(
	id_cart int primary key identity(1,1),
	id_user int not null,
	create_at_cart datetime not null,
	constraint fk_user_cart
		foreign key (id_user)
		references user_store(id_user)
		on delete cascade
);

create table orders(
	id_order int primary key identity(1,1),
	id_user int not null,
	order_date datetime not null,
	status_order varchar(10),
	total_price_order decimal not null,
	shipping_address_order varchar(15),
	payment_method_order varchar(15),
	create_at_order datetime,
	updated_at_order datetime,
	constraint fk_user_orders
		foreign key (id_user)
		references user_store(id_user)
		on delete cascade
);

create table categories(
	id_category int primary key identity(1,1),
	name_category varchar(15),
	description_category varchar(25),
	create_at_category datetime,
	updated_at_category datetime
);

create table products(
	id_product int primary key identity(1,1),
	id_category int not null,
	name_product varchar(20),
	description_product varchar(40),
	stock_product int,
	brand_product varchar(20),
	size_product int,
	color_product varchar(10),
	create_at_product datetime,
	updated_at_product datetime,
	constraint fk_categories_products
		foreign key (id_category)
		references categories(id_category)
		on delete cascade
);

create table inventory(
	id_inventory int primary key identity(1,1),
	id_product int not null,
	
	quantity_inventory int,
	restock_date_inventory datetime,
	supplier_name_inventory varchar(25),
	create_at_inventory datetime,
	updated_at_inventory datetime,
	constraint fk_products_inventory
		foreign key (id_product)
		references products(id_product)
		on delete cascade
);

create table product_image (
	id_image int primary key identity(1,1),
	id_product int not null,

	url_image varbinary(MAX),
	is_primary bit default 0,
	create_at_image datetime,
	updated_at_image datetime,
	constraint fk_products_image
		foreign key (id_product)
		references products(id_product)
		on delete cascade
);

create table cart_items (
	id_cart_item int primary key identity(1,1),
	id_cart int not null,

	id_product int not null,

	quantity_cart_item int,
	create_at_cart_item datetime,
	constraint fk_cart_cart_items
		foreign key (id_cart)
		references cart(id_cart)
		on delete cascade,
	constraint fk_products_cart_item
		foreign key (id_product)
		references products(id_product)
		on delete cascade
);

create table reviews (
	id_review int primary key identity(1,1),
	id_user int not null,
	id_product int not null,

	rating_review int,
	comment_review varchar(255),
	create_at_review datetime,
	updated_at_review datetime,
	constraint fk_user_review
		foreign key (id_user)
		references user_store(id_user)
		on delete cascade,
	constraint fk_products_review
		foreign key (id_product)
		references products(id_product)
		on delete cascade
);

create table order_items (
	id_order_item int primary key identity(1,1),
	id_order int not null,

	id_product int not null,
	quantity_order_item int,
	create_at_order_item datetime,
	updated_at_order_item datetime,
	constraint fk_order_order_item
		foreign key (id_order)
		references orders(id_order)
		on delete cascade,
	constraint fk_products_order_item
		foreign key (id_product)
		references products(id_product)
		on delete cascade
);

select * from user_store;
select * from roles;
select * from user_roles
select * from activities
select * from cart
select * from cart_items
select * from orders
select * from order_items
select * from reviews
select * from products
select * from product_image
select * from categories
select * from inventory

delete from user_store
where id_user = 3