# Migration `20200216190845-0`

This migration has been generated at 2/16/2020, 7:08:46 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "blog"."Section" (
    "id" text  NOT NULL ,
    "image" text  NOT NULL DEFAULT '',
    "name" text  NOT NULL DEFAULT '',
    PRIMARY KEY ("id")
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200216190845-0
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,16 @@
+
+datasource db {
+  provider = "postgresql"
+  url      = "postgresql://postgres:SuperSecret@localhost:5432/mydb?schema=blog"
+}
+
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Section {
+  id          String     @id       @default(cuid())
+  name        String 
+  image       String 
+}
```


