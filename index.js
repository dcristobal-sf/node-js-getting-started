const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => 
       {
        res.locals.title = 1234
        res.locals.token = 'QTA5MDAwMDAwRHpzMnJTR1hTc1p4dkJHSXpvNTRVeDlUSGxOSXZhaXVLWHR1TCtYa0FaSk5FMTREN29Mb3hCM3hXVTQ3L2NWdmdQTlozQkgrc2hqZ3M4N1lTZ1lWTUYvMkFMN0ZyNTU4RXEzM3k5UXZBYVdhWUpka0NNbnpNL3dVc0JHNWF4c1pWNmhZSXdnQlZPR1F3b2NtY1dXb1VrWHJ0dz09'
        res.render('pages/index')
       })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
