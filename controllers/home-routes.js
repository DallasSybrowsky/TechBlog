const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

// Get all posts for homepage
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    console.log(postData);

    const posts = postData.map((post) =>
      post.get({
        plain: true,
      })
    );

    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single post
router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    const post = postData.get({
      plain: true,
    });

    res.render("post", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Dashboard route
router.get("/dashboard", withAuth, async (req, res) => {
  console.log("dashboard 64");
  try {
    // const userData = await User.findByPk(req.session.user_id, {
    //   attributes: {
    //     exclude: ["password"],
    //   },
    //   // include: [
    //   //   {
    //   //     model: Post,
    //   //   },
    //   // ],
    // });
    // console.log(userData);

    // const user = userData.get(
    //   {plain: true,}
    // );

    // get all posts for dashboard
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    console.log("post data", postData);
    const post = postData.get({
      plain: true,
    });
    console.log("post", post);
    res.render("dashboard", {
      postData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login route
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

// Sign up route
router.get("/signUp", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signup");
});

module.exports = router;
