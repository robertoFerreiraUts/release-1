const puppeteer = require('puppeteer');
const credentials = require('./test/credentialsL');
const updateinfo = require('./test/updateInfo');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            '--window-size=1920,1080'
        ]
    })

//Register 
const page = await browser.newPage();
  page.setViewport({height: 1080, width: 1920});
  await page.goto('https://newdown22.herokuapp.com/users/register');
  
  await page.waitFor(() => document.querySelectorAll('input').length)

  await page.type('[name=firstname]', credentials.firstname)
  await page.type('[name=lastname]', credentials.lastname)
  await page.type('[name=email]', credentials.email)
  await page.type('[name=password]', credentials.password)
  await page.type('[name=password2]', credentials.password2)

  // console.log(await page.content());
  // await page.screenshot({path: 'Register.png'});

  await page.evaluate(() => {
      document.querySelector('.btn.btn-primary').click()
  });

  await page.waitFor(3000);

  
//forgot password
  const page5 = await browser.newPage();
  page.setViewport({height: 1080, width: 1920});
  await page5.goto('https://newdown22.herokuapp.com/users/forgot');
  
  await page5.waitFor(() => document.querySelectorAll('input').length)

  await page5.type('[name=email]', credentials.email)
  // console.log(await page.content());
  // await page.screenshot({path: 'Register.png'});

  await page5.evaluate(() => {
      document.querySelector('.btn.btn-primary').click()
  });

  await page5.waitFor(3000);




//Login
  const page2 = await browser.newPage();
  page2.setViewport({height: 1080, width: 1920});
  await page2.goto('https://newdown22.herokuapp.com/users/login');
  
  await page2.waitFor(() => document.querySelectorAll('input').length)
  
  

  await page2.type('[name=email]', credentials.email)
  await page2.type('[name=password]', credentials.password)

  // console.log(await page2.content());
  // await page2.screenshot({path: 'Login.png'});

  await page2.evaluate(() => {
      document.querySelector('.btn.btn-primary').click()
  });
  await page2.waitFor(3000);


// // Edit
  const page3 = await browser.newPage();
  page3.setViewport({height: 1080, width: 1920});
  await page3.goto('https://newdown22.herokuapp.com/users/edit');

  
  await page3.click("input[name=firstname]", {clickCount: 3})
  await page3.keyboard.press('Backspace') 
  await page3.type('[name=firstname]', updateinfo.firstname)
//   await page.type('[name=lastname]', updateinfo.lastname)
//   await page.type('[name=email]', updateinfo.email)
 console.log(await page2.content());
  await page2.screenshot({path: 'edit.png'});


  await page3.evaluate(() => {
      document.querySelector('.btn.btn-primary').click()
  });

await page3.waitFor(3000);



//  //Delete
const page4 = await browser.newPage();
page4.setViewport({height: 1080, width: 1920});
await page4.goto('https://newdown22.herokuapp.com/users/areusure');

//   console.log(await page4.content());
//   await page4.screenshot({path: 'Delete.png'});

await page4.evaluate(() => {
  document.querySelector('.btn.btn-danger.btn-block').click()
});
await page4.waitFor(3000);


  await browser.close();
})() ;








