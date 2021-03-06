PGDMP     (                    y            book-asm    13.1    13.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    18688    book-asm    DATABASE     n   CREATE DATABASE "book-asm" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE "book-asm";
                postgres    false            �            1259    18697    books    TABLE       CREATE TABLE public.books (
    id_book character varying NOT NULL,
    name_book character varying,
    price_book character varying,
    author character varying,
    review text,
    img_book character varying,
    id_category character varying,
    rating integer
);
    DROP TABLE public.books;
       public         heap    postgres    false            �            1259    18705    category    TABLE     r   CREATE TABLE public.category (
    id_category character varying NOT NULL,
    name_category character varying
);
    DROP TABLE public.category;
       public         heap    postgres    false            �            1259    18689    users    TABLE     �   CREATE TABLE public.users (
    id_user character varying NOT NULL,
    name_user character varying,
    password_user character varying,
    type_user character varying
);
    DROP TABLE public.users;
       public         heap    postgres    false            �          0    18697    books 
   TABLE DATA           n   COPY public.books (id_book, name_book, price_book, author, review, img_book, id_category, rating) FROM stdin;
    public          postgres    false    201   �       �          0    18705    category 
   TABLE DATA           >   COPY public.category (id_category, name_category) FROM stdin;
    public          postgres    false    202   �       �          0    18689    users 
   TABLE DATA           M   COPY public.users (id_user, name_user, password_user, type_user) FROM stdin;
    public          postgres    false    200   �       .           2606    18704    books books_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id_book);
 :   ALTER TABLE ONLY public.books DROP CONSTRAINT books_pkey;
       public            postgres    false    201            0           2606    18712    category category_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id_category);
 @   ALTER TABLE ONLY public.category DROP CONSTRAINT category_pkey;
       public            postgres    false    202            ,           2606    18696    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id_user);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    200            1           2606    18713    books books_id_category_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_id_category_fkey FOREIGN KEY (id_category) REFERENCES public.category(id_category);
 F   ALTER TABLE ONLY public.books DROP CONSTRAINT books_id_category_fkey;
       public          postgres    false    201    2864    202            �   �   x���1N1Ek�)|��<k��)I�*m��N�
	�p
*D���q��	�D���Ο��>{�6��3\t�M������I]�?�N_��Q�n�OoG-��L�Zo���qҫ��2��/wc�׷__j�VCK5C2�[ 8� �jۋԊ&qꛯ�}h�9�pn,+DoW1m����Ŗ8�`�b3;�<�oc�	{
���ǃ
?-�-�4�=��3R��(��{�Z���D,J*�����7���>J��      �   �   x�Eͭ��0@alU�6��]����!�])11�$ ���k"�� �*q'g��y5���T��#A���;��-ra7�m�������-�a'1*4kB-j�J���h������<��s2��R�҅!X���5T��m,=�|ޖ�l�zΤ�����P�0��+�쇯i������t0����Bt      �   �   x��I
�0 �ur�nS2��RAA(�M-�IL34&�S����P�0+��w"�Hb��K9;A��*���Ԝ�c(C���*���q�i�z,�Z�ms-���X���^�x��f��3&d\I_Z����$�     