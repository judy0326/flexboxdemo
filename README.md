# flexboxdemo
test some flexbox style
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>

<style type="text/css" media="screen">
    *{
        margin: 0;
        padding: 0;
    }
    body {
        color: #fff;
        font-size: 20px;
    }
    .box-flex {
        width:960px;
        background:gray;
        margin:100px;
        display: -webkit-box;
        display: -moz-box;
        display:box;
    }
    .box-flex p:first-child {
        background: green;
    }
    .box-flex p:last-child {
        background: orange;
    }

</style>

<body>

<div class="box-flex">
    <p>I'm a green flex box</p>
    <p>I'm an orange flex box, I'm to test box-flex </p>
</div>
</body>
</html>
