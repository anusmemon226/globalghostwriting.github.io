<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/bootstrap4.min.css">
    <link rel="stylesheet" href="css/bootstrap5.min.css">
    <link rel="stylesheet" href="css/font-awesome-4.7.0/css/font-awesome.min.css">
    <title>Document</title>
</head>

<body>
    <div class="topper_bg contact" style="z-index: 9999;">
        <?php include('navbar.php') ?>

        <section class="contact_banner">
            <div class="header">
                <div class="head">
                    <h1>CONTACT US</h1>
                </div>
            </div>
        </section>
    </div>



    <div class="container-fluid contact-form" style="z-index: -1;">
        <div class="container hero">
            <div class="col-xl-4 col-lg-4 col-md-12 contact-form-col">
              
                <div class="cont-us-det">
                <div class="web-name">
                    <h2>Website</h2>
                    <p>info@abcwebsite.com</p>
                </div>
                <a href="mailto: info@abcwebsite.com" class="cont-link">
                    <div class="email-sec">
                        <div class="e-logo">
                            <i class="fa fa-envelope-open-o"></i>
                        </div>
                        <div class="email">
                            <p>info@abcwebsite.com</p>
                        </div>
                    </div>
                </a>
                <a href="tel: +000 000 0000" class="cont-link">
                    <div class="phone-sec">
                        <div class="p-logo">
                            <i class="fa fa-phone"></i>
                        </div>
                        <div class="phone">
                            <p>+000 000 000 0000</p>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
            <div class="col-xl-8 col-lg-8 col-md-12 hero-col-2">
                <div class="hf-start">
                    <div class="form-head">
                        <div class="head c-head">
                            <h2>Fill This Form to
                                Avail Exclusive Discounts</h2>
                        </div>
                        <div class="d_badge">
                            <img src="images/hero/discount.png" alt="">
                        </div>
                    </div>
                    <div class="hero-form">
                        <form method="POST">
                            <div class="form-group">
                                <label for="name">Your Name:</label>
                                <input type="text" id="name" name="name" placeholder="Enter Your Name" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="name">Your Email:</label>
                                <input type="text" id="name" name="email" placeholder="Enter Your Email" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="name">Your Number:</label>
                                <input type="text" id="name" name="number" placeholder="Enter Your Number" class="form-control">
                            </div>
                            <div class="ff-btn">
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>




    <?php include('footer.php') ?>
    <script src="js/app.js"></script>
    <script src="js/bootstrap4-js.min.js"></script>
    <script src="js/bootstrap5-js.min.js"></script>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script>
        window.addEventListener('load', function() {
            nav_active(4)
        })
    </script>
</body>

</html>