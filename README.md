# Inobitec-practise-server

**Create table**
```
Create Table networks(
	id SERIAL PRIMARY KEY,
	name VARCHAR(256),
	IP VARCHAR(45),
	port INTEGER,
	parent_id INTEGER,
	Foreign key (parent_id) references node(id) on delete cascade
);
```

In the project directory, you can run:

### `node index.js`
