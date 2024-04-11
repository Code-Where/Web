let left = [
    {
        "id": "Theory",
        "heading": "Basics of MySQL",
        "Topics": ["Introduction", "Data Types"]
    },
    {
        "id": "Database",
        "heading": "Database",
        "Topics": ["Create Database", "Show Database", "Drop Database", "Use Database"]
    },
    {
        "id": "Table",
        "heading": "Table",
        "Topics": ["Create Table", "Show Tables", "Describe Table", "Drop Table"]
    },
    {
        "id": "Alter",
        "heading": "Alter",
        "Topics": ["Add Column", "Drop Column", "Updating Column"]
    },
    {
        "id": "Insert",
        "heading": "Insert",
        "Topics": ["Inserting Values into a Table"]
    },
    {
        "id": "Delete",
        "heading": "Delete",
        "Topics": ["Deleting Row from a Table"]
    },
    {
        "id": "Update",
        "heading": "Update",
        "Topics": ["Updating value of a cell"]
    },
    {
        "id": "Select",
        "heading": "Select",
        "Topics": ["Getting Values from a Table", "Conditional retrieval of rows", "Matching a pattern from a table"]
    },
    {
        "id": "Clauses",
        "heading": "Clauses",
        "Topics": ["Group by", "Having", "Order by", "Limit", "Offset"]
    },
    {
        "id": "Views",
        "heading": "Views",
        "Topics": ["Creating View", "Deleting View"]
    },
    {
        "id": "Privileges",
        "heading": "Managing Privileges",
        "Topics": ["Grant", "Revoke"]
    },
    {
        "id": "Transactions",
        "heading": "Transaction Management",
        "Topics": ["Commit", "Rollback"]
    },
    {
        "id": "Joins",
        "heading": "Joins",
        "Topics": ["Equi Joins", "Cartesian Join", "Outer Joins", "Self Joins"]
    },  
];



let a = 0;
document.getElementById("topicsleft").innerHTML = '';
left.forEach(element => {
    document.getElementById("topicsleft").innerHTML += `<div>
    <a href="#${element.id}">${element.heading}<i class="fa fa-toggle-down" style="padding:0px 10px;"></i></a>
    <div class="sub-menu" id="${element.id}">
    </div>
</div>`
element.Topics.forEach(topic => {
    document.getElementById(element.id).innerHTML += `
    <a class="topic" onclick="myfunc(this)" id=${a++}>${topic}</a>
    `
});
});
let right = [
    {
        "code": `<h2>What is MySQL?</h2>
        <p>SQL, or Structured Query Language, is a powerful programming language designed for managing and manipulating
            relational databases. Developed in the 1970s, SQL has become the standard language for interacting with
            databases, providing a standardized way to perform tasks such as querying data, updating records, and defining
            database structures.</p>
        <h2>Key Concepts of SQL:</h2>
        <p><b><u>Data Definition Language (DDL):</u></b> DDL commands enable users to define and manage the structure of a
            database. This includes creating and altering database objects such as tables, indexes, and constraints.</p>
        <p><b>Data Manipulation Language (DML):</b> SQL includes commands for querying and modifying data within a
            database. Common DML commands include SELECT (retrieve data), INSERT (add new records), UPDATE (modify existing
            records), and DELETE (remove records).</p>
        <p><b>Control Language (DCL):</b> DCL commands govern access to the database. They include commands such as GRANT
            (assign privileges) and REVOKE (remove privileges), which control who can access and manipulate data within the
            database.</p>`,
        "tableRequired": false
    },
    {
        "code": `<h2>Data Types in SQL</h2>
        <p>In SQL, data types are used to specify the type of data that can be stored in a column of a table. Each column in a table must have a specific data type, which defines the kind of values that can be inserted into that column. SQL supports a wide range of data types, each designed to accommodate different types of data and optimize storage efficiency.</p>
        <h2>Common data types in SQL:</h2>
        <p>
        <table>
            <tr>
                <th>Data Type<th>
                <th>Description<th>
            </tr>
            <tr>
                <td>CHAR(size)<td>
                <td>A FIXED length string (can contain letters, numbers, and special characters). The size parameter specifies the column length in characters - can be from 0 to 255. Default is 1<td>
            </tr>
            <tr>
                <td>VARCHAR(size)<td>
                <td>A VARIABLE length string (can contain letters, numbers, and special characters). The size parameter specifies the maximum column length in characters - can be from 0 to 65535<td>
            </tr>
            <tr>
                <td>TEXT(size)<td>
                <td>Holds a string with a maximum length of 65,535 bytes<td>
            </tr>
            <tr>
                <td>TINYINT(size)<td>
                <td>A very small integer. Signed range is from -128 to 127. Unsigned range is from 0 to 255. The size parameter specifies the maximum display width (which is 255)<td>
            </tr>
            <tr>
                <td>BOOL<td>
                <td>Zero is considered as false, nonzero values are considered as true.<td>
            </tr>
            <tr>
                <td>INT(size)<td>
                <td>A medium integer. Signed range is from -2147483648 to 2147483647. Unsigned range is from 0 to 4294967295. The size parameter specifies the maximum display width (which is 255)<td>
            </tr>
            <tr>
                <td>BIGINT(size)<td>
                <td>A large integer. Signed range is from -9223372036854775808 to 9223372036854775807. Unsigned range is from 0 to 18446744073709551615. The size parameter specifies the maximum display width (which is 255)<td>
            </tr>
            <tr>
                <td>FLOAT(p)<td>
                <td>A floating point number. MySQL uses the p value to determine whether to use FLOAT or DOUBLE for the resulting data type. If p is from 0 to 24, the data type becomes FLOAT(). If p is from 25 to 53, the data type becomes DOUBLE()<td>
            </tr>
            <tr>
                <td>DOUBLE(size, d)<td>
                <td>A normal-size floating point number. The total number of digits is specified in size. The number of digits after the decimal point is specified in the d parameter<td>
            </tr>
            <tr>
                <td>DECIMAL(size, d)<td>
                <td>An exact fixed-point number. The total number of digits is specified in size. The number of digits after the decimal point is specified in the d parameter. The maximum number for size is 65. The maximum number for d is 30. The default value for size is 10. The default value for d is 0.<td>
            </tr>
            <tr>
                <td>DATE<td>
                <td>A date. Format: YYYY-MM-DD. The supported range is from '1000-01-01' to '9999-12-31'<td>
            </tr>
            <tr>
                <td>YEAR<td>
                <td>	A year in four-digit format. Values allowed in four-digit format: 1901 to 2155, and 0000.
                MySQL 8.0 does not support year in two-digit format.<td>
            </tr>
        </table></p>
        `,
        "tableRequired": false
    },
    {
        "code": `
        <h2>Creating Databases</h2>
        <p>To create a new database in MySQL, you can use the CREATE DATABASE statement followed by the name of the database you want to create. Here's the basic syntax:</p>
        <h2>Syntax</h2>
        <p>
            <code>CREATE DATABASE database_name;</code>
        </p>
        <p>Replace database_name with the name you want to give to your new database. Here's an example of creating a database named School:</p>
        <h2>Query</h2>
        <p>
            <code>CREATE DATABASE school;</code><br><br>
            Query OK, 1 row affected (0.02 sec)
        </p>
        `,
        "tableRequired": false
    },
    {
        "code": `
        <h2>Showing Databases</h2>
        <p>To show the list of databases in MySQL, you can use the SHOW DATABASES; command. Here's how you would do it:</p>
        <h2>Query</h2>
        <p>
            <code>SHOW DATABASES;</code>
            <table>
                <tr>
                    <th>Database</th>
                </tr>
                <tr>
                    <td>information_schema</td>
                </tr>
                <tr>
                    <td>mysql</td>
                </tr>
                <tr>
                    <td>performance_schema</td>
                </tr>
                <tr>
                    <td>school</td>
                </tr>
                <tr>
                    <td>sys</td>
                </tr>
            </table>
        </p>
        <p><b>Note:- </b>We have created database named school rest all are created by default.</p>
        `,
        "tableRequired": false
    },
    {
        "code":`<h2>Dropping Database</h2>
        <p>To drop (delete) a database in MySQL, you can use the following SQL statement:</p>
        <h2>Syntax</h2>
        <p>
            <code>DROP DATABASE database_name;</code>
        </p>
        <p>Replace database_name with the name of the database you want to delete. Here's an example of deleting a database named school:</p>
        <h2>Query</h2>
        <p>
            <code>DROP DATABASE school;</code><br><br>
            Query OK, 0 rows affected (0.14 sec)<br><br>
            <code>SHOW DATABASES;</code><br><br>
            <table>
                <tr>
                    <th>Database</th>
                </tr>
                <tr>
                    <td>information_schema</td>
                </tr>
                <tr>
                    <td>mysql</td>
                </tr>
                <tr>
                    <td>performance_schema</td>
                </tr>
                <tr>
                    <td>sys</td>
                </tr>
            </table>
        </p>`
        
        ,"tableRequired":false
    },
    {
        "code":`<h2>Using Database</h2>
        <p>To use a database in MySQL, you can use the following SQL statement:</p>
        <h2>Syntax</h2>
        <p>
            <code>USE database_name;</code>
        </p>
        <p>Replace database_name with the name of the database you want to use(make sure it is available). Here's an example of using a database named school:</p>
        <h2>Query</h2>
        <p>
        <code>SHOW DATABASES;</code>
        <table>
            <tr>
                <th>Database</th>
            </tr>
            <tr>
                <td>information_schema</td>
            </tr>
            <tr>
                <td>mysql</td>
            </tr>
            <tr>
                <td>performance_schema</td>
            </tr>
            <tr>
                <td>school</td>
            </tr>
            <tr>
                <td>sys</td>
            </tr>
        </table>
            <code>USE school;</code><br><br>
            <code>Database changed</code>
        </p>
        `
        ,"tableRequired":false
    },
    {
        "code":`<h2>Creating Table</h2>
        <p>To create a table in MySQL, you can use the following SQL statement:</p>
        <h2>Syntax</h2>
        <p>
            CREATE TABLE table_name (
                column1 datatype constraints,
                column2 datatype constraints,
                ...
            );
            
        </p>
        <p>
        table_name: This is the name of the table you want to create.<br><br>

        (column1, column2, ...): These are the names of the columns in the table.<br><br>

        datatype: Specifies the data type for each column. Examples include INT, VARCHAR, DATE, etc.<br><br>

        constraints: Optional constraints that enforce rules or conditions on the data in the columns, such as PRIMARY KEY, NOT NULL, UNIQUE, FOREIGN KEY, etc.<br><br>
        Here's an example of creating a simple table named student with three columns:</p>
        <h2>Query</h2>
        <p>
            USE school;<br><br>
            Database changed<br><br>
            CREATE TABLE student (
                RollNo INT PRIMARY KEY,
                Name VARCHAR(50),
                PhoneNo VARCHAR(10)
            );<br><br>Query OK, 0 rows affected (0.16 sec)
        </p>
        `
        ,"tableRequired":false
    },
    {
        "code": `
        <h2>Showing Tables</h2>
        <p>To show the list of tables in a particular database of MySQL, you can use the SHOW TABLES; command. Here's how you would do it:</p>
        <h2>Syntax</h2>
        <p>
            <code>SHOW TABLES;</code>
        </p>
        <h2>Query</h2>
        <p>
            <code>USE school;</code><br><br>
            Database changed<br><br>
            <code>SHOW TABLES;</code>
            <table>
                <tr>
                    <th>Tables_in_school</th>
                </tr>
                <tr>
                    <td>student</td>
                </tr>
                <tr>
                    <td>course</td>
                </tr>
            </table>
        </p>
        `,
        "tableRequired": false
    },
    {
        "code": `
        <h2>Describe Tables</h2>
        <p>In MySQL, you can use the DESCRIBE or DESC command to display information about the structure of a table, including column names, data types, and constraints. Both DESCRIBE and DESC are equivalent and can be used interchangeably. Here's how you would use them:</p>
        <h2>Syntax</h2>
        <p>
            <code>DESCRIBE table_name;</code><br><br>
            Or<br><br>
            <code>DESC table_name;</code>
        </p>
        <h2>Query</h2>
        <p>
            <code>USE school;</code><br><br>
            Database changed<br><br>
            <code>DESC student;</code>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Null</th>
                    <th>Key</th>
                    <th>Default</th>
                    <th>Extra</th>
                </tr>
                <tr>
                    <td>RollNo</td>
                    <td>int</td>
                    <td>NO</td>
                    <td>PRI</td>
                    <td>NULL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>varchar(50)</td>
                    <td>YES</td>
                    <td></td>
                    <td>NULL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>PhoneNo</td>
                    <td>varchar(10)</td>
                    <td>YES</td>
                    <td></td>
                    <td>NULL</td>
                    <td></td>
                </tr>
            </table>
        </p>
        `,
        "tableRequired": false
    },
    {
        "code": `
        <h2>Droping Tables</h2>
        <p>To drop a table in MySQL, you use the DROP TABLE statement followed by the name of the table you want to delete. Here's the basic syntax:</p>
        <h2>Syntax</h2>
        <p>
            <code>DROP TABLE table_name;</code>
        </p>
        <h2>Query</h2>
        <p>
            <code>USE school;</code><br><br>
            Database changed<br><br>
            <code>SHOW TABLES;</code>
            <table>
                <tr>
                    <th>Tables_in_school</th>
                </tr>
                <tr>
                    <td>student</td>
                </tr>
                <tr>
                    <td>course</td>
                </tr>
                <tr>
                    <td>temporary</td>
                </tr>
            </table>
            <code>DROP TABLE temporary;</code><br><br>
            Query OK, 0 rows affected (0.08 sec)
        </p>
        `,
        "tableRequired": false
    },
    {
        "code": `
        <h2>Adding New Columns To Tables</h2>
        <p>To add a new column to an existing table in MySQL, you can use the ALTER TABLE statement followed by the ADD COLUMN clause. Here's the basic syntax:</p>
        <h2>Syntax</h2>
        <p>
            <code>ALTER TABLE table_name ADD COLUMN column_name datatype [constraints];</code>
        </p>
        <h2>Query</h2>
        <p>
            <code>ALTER TABLE student ADD COLUMN DOB date;<br><br>
            Query OK, 0 rows affected (0.13 sec)<br>
            Records: 0  Duplicates: 0  Warnings: 0<br><br>
            </code>
            <code>DESC student;</code>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Null</th>
                    <th>Key</th>
                    <th>Default</th>
                    <th>Extra</th>
                </tr>
                <tr>
                    <td>RollNo</td>
                    <td>int</td>
                    <td>NO</td>
                    <td>PRI</td>
                    <td>NULL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>varchar(50)</td>
                    <td>YES</td>
                    <td></td>
                    <td>NULL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>PhoneNo</td>
                    <td>varchar(10)</td>
                    <td>YES</td>
                    <td></td>
                    <td>NULL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>DOB</td>
                    <td>date</td>
                    <td>YES</td>
                    <td></td>
                    <td>NULL</td>
                    <td></td>
                </tr>
            </table>
        </p>
        `,
        "tableRequired": false
    },
    {
        "code": `
        <h2>Droping Columns From Tables</h2>
        <p>To drop (remove) a column from an existing table in MySQL, you use the ALTER TABLE statement with the DROP COLUMN clause. Here's the basic syntax:</p>
        <h2>Syntax</h2>
        <p>
            <code>ALTER TABLE table_name DROP COLUMN column_name;</code>
        </p>
        <h2>Query</h2>
        <p>
            <code>ALTER TABLE student DROP COLUMN DOB;<br><br>
            Query OK, 0 rows affected (0.17 sec)<br>
            Records: 0  Duplicates: 0  Warnings: 0<br><br>
            </code>
            <code>DESC student;</code>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Null</th>
                    <th>Key</th>
                    <th>Default</th>
                    <th>Extra</th>
                </tr>
                <tr>
                    <td>RollNo</td>
                    <td>int</td>
                    <td>NO</td>
                    <td>PRI</td>
                    <td>NULL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>varchar(50)</td>
                    <td>YES</td>
                    <td></td>
                    <td>NULL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>PhoneNo</td>
                    <td>varchar(10)</td>
                    <td>YES</td>
                    <td></td>
                    <td>NULL</td>
                    <td></td>
                </tr>
            </table>
        </p>
        `,
        "tableRequired": false
    },
    {
        "code": `
        <h2>Updating Columns of Tables</h2>
        <p>To update (modify) a column in an existing table in MySQL, you can use the ALTER TABLE statement with the MODIFY COLUMN clause. Here's the basic syntax:</p>
        <h2>Syntax</h2>
        <p>
            <code>ALTER TABLE table_name MODIFY COLUMN column_name new_datatype [new_constraints];</code>
        </p>
        <h2>Query</h2>
        <p>
            <code>DESC student;</code>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Null</th>
                    <th>Key</th>
                    <th>Default</th>
                    <th>Extra</th>
                </tr>
                <tr>
                    <td>RollNo</td>
                    <td>int</td>
                    <td>NO</td>
                    <td>PRI</td>
                    <td>NULL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>varchar(50)</td>
                    <td>YES</td>
                    <td></td>
                    <td>NULL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>PhoneNo</td>
                    <td>varchar(10)</td>
                    <td>YES</td>
                    <td></td>
                    <td>NULL</td>
                    <td></td>
                </tr>
            </table>
            <code>ALTER TABLE student MODIFY COLUMN RollNo varchar(10);<br><br>
            Query OK, 0 rows affected (0.10 sec)<br>
            Records: 0  Duplicates: 0  Warnings: 0<br><br>
            </code>
            <code>DESC student;</code>
            <table>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Null</th>
                    <th>Key</th>
                    <th>Default</th>
                    <th>Extra</th>
                </tr>
                <tr>
                    <td>RollNo</td>
                    <td>varchar(10)</td>
                    <td>NO</td>
                    <td>PRI</td>
                    <td>NULL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>varchar(50)</td>
                    <td>YES</td>
                    <td></td>
                    <td>NULL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>PhoneNo</td>
                    <td>varchar(10)</td>
                    <td>YES</td>
                    <td></td>
                    <td>NULL</td>
                    <td></td>
                </tr>
            </table>
        </p>
        `,
        "tableRequired": false
    },
]

var frame = document.getElementById("outputframe")
function myfunc(a) {
    if (right[a.id].tableRequired) {
        alert("hello")
    } else {
        frame.innerHTML = right[a.id].code;
    }
}



