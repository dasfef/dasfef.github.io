---
layout: post
permalink: /home
permalink_name: HOME
title: HOME

# detail_image: assets/theme_logo.svg

---

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Donut</title>
    <style>
        ::selection {
            background: #505050;
        }

        ::-moz-selection {
            background: #505050;
        }

        html,
        body,
        .container {
            overflow: hidden;
            background-color: black;
            height: auto;
        }

        .container {
            color: white;
            display: -webkit-flexbox;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
            justify-content: center;
        }
    </style>
</head>

<body>
    <div class="container">
        <pre class="center" id="d"></pre>
    </div>
    <h1 align:cetner>도넛을 만들 수 있을때까지</h1>
    <script src="donut.js"></script>
    
</body>

</html>