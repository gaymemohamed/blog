# Migration `20200217103734-1`

This migration has been generated at 2/17/2020, 10:37:34 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "blog"."Article" (
    "description" text  NOT NULL DEFAULT '',
    "id" text  NOT NULL ,
    "image" text  NOT NULL DEFAULT '',
    "isActive" boolean  NOT NULL DEFAULT true,
    "section" text  NOT NULL ,
    "title" text  NOT NULL DEFAULT '',
    PRIMARY KEY ("id")
) 

ALTER TABLE "blog"."Article" ADD FOREIGN KEY ("section") REFERENCES "blog"."Section"("id") ON DELETE RESTRICT
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200216190845-0..20200217103734-1
--- datamodel.dml
+++ datamodel.dml
@@ -1,8 +1,8 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = "postgresql://postgres:SuperSecret@localhost:5432/mydb?schema=blog"
 }
 generator client {
@@ -13,4 +13,13 @@
   id          String     @id       @default(cuid())
   name        String 
   image       String 
 }
+
+model Article {
+  id          String     @id       @default(cuid())
+  title       String
+  description String
+  image       String
+  isActive    Boolean              @default(true) 
+  section     Section
+}
```


