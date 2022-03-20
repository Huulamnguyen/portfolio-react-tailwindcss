const Articles = [
    {   
        id: 1,
        title: "Starting My Software Engineering Journey from Data Analyst",
        tags: ["Software Engineering"],
        date: "January 23, 2022",
        link: "https://medium.com/@liamdev/restarting-my-software-engineering-journey-from-data-analyst-34669acac5a8",
        img: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
        description: "My name is Liam Nguyen. I was born and raised in Vietnam, then moved here to the US with my family for education and business purposes ..."
    },
    {   
        id: 2,
        title: "Common SQL Queries: ORDER BY, LIMIT, BETWEEN, NULL, COUNT, GROUP BY",
        tags: ["SQL", "Database"],
        date: "February 03, 2022",
        link: "https://medium.com/@liamdev/common-sql-queries-order-by-limit-between-null-count-group-by-6d25ec2fe482",
        img: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        description: "Structured Query Language (SQL) is a standardized programming language that is used to manage relational databases and perform various operations on the data in them ..."
    },
    {
        id: 3,
        title: "Quick Review on Active Record Migrations",
        tags: ["Active Record", "Ruby"],
        date: "February 04, 2022",
        link: "https://medium.com/@liamdev/quick-review-on-active-record-migrations-c7976a2d6c91",
        img: "https://images.unsplash.com/photo-1610018556010-6a11691bc905?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        description: "Migrations are a crucial part of any Active Record application. They provide a consistent way to set up and update your database tables, without having to write any SQL code by hand ..."
    },
    {
        id: 4,
        title: "Git Workflow That I have Followed",
        tags: ["Git", "Github"],
        date: "February 05, 2022",
        link: "https://medium.com/@liamdev/git-workflow-that-i-have-followed-522a55484dbf",
        img: "https://images.unsplash.com/photo-1630514969818-94aefc42ec47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        description: "A Git workflow is a recipe or recommendation for how to use Git to accomplish work in a consistent and productive manner ..."
    },
    {
        id: 5,
        title: "Rails HTTP Status Code",
        tags: ["HTTP", "Status Code", "Rails"],
        date: "February 22, 2022",
        link: "https://medium.com/@liamdev/rails-http-status-code-b54fb22fad5c",
        img: "https://images.unsplash.com/photo-1527335480088-278dbeec0ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        description: "HTTP status codes and their respective Rails symbol representations. For example, :not_found can be used instead of 404 in a render call: ..."
    },
    {
        id: 6,
        title: "Building Sinatra API Back-end with Active Record/Ruby Part 1",
        tags: ["Sinatra", "Active Record", "API", "Back-End"],
        date: "February 18, 2022",
        link: "https://liamdev.medium.com/building-sinatra-api-back-end-with-active-record-ruby-3f5c762a2508",
        img: "https://images.unsplash.com/photo-1514428631868-a400b561ff44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        description: "Review fundamentals and Sinatra API Application Starter Code ..."
    },
    {
        id: 7,
        title: "Building Sinatra API Back-end with Active Record/Ruby Part 2",
        tags: ["Sinatra", "Active Record", "API", "Back-End"],
        date: "February 21, 2022",
        link: "https://liamdev.medium.com/building-sinatra-api-back-end-with-active-record-ruby-part-2-12b773a4361",
        img: "https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        description: "Back to Models ERD Diagram, there are two main associations: Product-Category (Many-to-Many) and Product-Supplier(Many-to-Many) ..."
    },
    {
        id: 8,
        title: "Building Sinatra API Back-end with Active Record/Ruby Part 3",
        tags: ["Sinatra", "Active Record", "API", "Back-End"],
        date: "February 21, 2022",
        link: "https://liamdev.medium.com/building-sinatra-api-back-end-with-active-record-ruby-part-3-4044ba8560c",
        img: "https://images.unsplash.com/photo-1595617795501-9661aafda72a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        description: "Part 3 Sinatra API Routes. The routes in this API application handle all CRUD (Create-Read-Update-Delete) actions ..."
    },
    {
        id: 9,
        title: "Auth For My React Rails Application Including Reset Password",
        tags: ["Rails", "Active Record", "API", "Back-End", "Auth"],
        date: "March 10, 2022",
        link: "https://medium.com/@liamdev/auth-for-my-react-rails-application-b87c8d0ec04c",
        img: "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        description: "To get started, I chose to build authentication and Authorization features first. Because I think Auth features are the most significant function ..."
    },
]

export default Articles.reverse();