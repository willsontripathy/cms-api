const express = require('express');
const userRoute = require('./routes/user.routes');
const pageRoute = require('./routes/page.route');
const testimonialRoute = require('./routes/testimonial.routes');
const inclusivityRoute = require('./routes/inclusivity.routes');
const bannerRoute = require('./routes/banner.routes');
const exploreRoute = require('./routes/explore.routes');
const latestUpdatesRoute = require('./routes/latestUpdates.routes');
const philosophyRoute = require('./routes/philosophy.routes');

const app = express();

app.use(
    express.urlencoded({
      extended: true
    })
  )

app.use(express.json());

app.use('/user', userRoute);
app.use('/page', pageRoute);
app.use('/testimonial', testimonialRoute);
app.use('/inclusivity', inclusivityRoute);
app.use('/banner',bannerRoute);
app.use('/explore',exploreRoute);
app.use('/latestUpdates',latestUpdatesRoute);
app.use('/philosophy',philosophyRoute);

app.listen(3000, () => {
    console.log('app is running on port 3000');
})