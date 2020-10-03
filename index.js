const fetch = require('node-fetch');
const readlineSync = require('readline-sync');
var randomize = require('randomatic')
var md5 = require('md5');
var random = require('random-name')
const { URLSearchParams } = require('url');
const { first } = require('random-name');
const ethWallet = require('ethereumjs-wallet');

const functionRegist = (first, last, email, ip, eth, reff) => new Promise((resolve, reject) => {
    const params = new URLSearchParams;
    params.append('cors_jsonp', '1');
    params.append('login_type', '2');
    params.append('referral_hash', reff);
    params.append('competition_id', '20864')
    params.append('competition_url', 'cno9xudy')
    params.append('admin_user_id', '21922')
    params.append('website_id', '22156')
    params.append('embedded_giveaway_link', `https%3A%2F%2Fsweepwidget.com%2Fview%2F20864-cno9xudy%2F${reff}`)
    params.append('login_name', `${first}+${last}`)
    params.append('login_email', email)
    params.append('birthday_full', '')
    params.append('user_ip_address', ip)
    params.append('user_country_code', 'ID')
    params.append('google_captcha_response', '')
    params.append('check_for_duplicate_ip', '1')
    params.append('browser', 'Chrome+83')
    params.append('entry_methods_l1_values%5B%5D', `text_input%7C1%7C${eth}`)
    params.append('parent_host_url', 'sweepwidget.com')
    params.append('language', 'en')
    params.append('payment_method_id', '')
    params.append('payment_select_items', '')
    params.append('payment_donation', '')
    params.append('payment_currency', '')
    params.append('payment_if_already_paid', '0')
    params.append('optional_payment_opt_in', '0')

       fetch('https://sweepwidget.com/w/a/c_l.php', {
        method: 'POST', 
        body: params,
        headers: {
            'Host': 'sweepwidget.com',
            'Accept': 'text/plain, */*; q=0.01',
            'X-Requested-With': 'XMLHttpRequest',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Origin': 'https://sweepwidget.com',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': `https://sweepwidget.com/view/20864-cno9xudy/${reff}`,
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9',
            //'Cookie': '__cfduid=d0a8b316c269d3738a04f1f50d13314721601656300; _ga=GA1.2.441990903.1601656305; _gid=GA1.2.1898161170.1601656305; em_cdn_uid=t%3D1601656308578%26u%3D490987c1cf9248219204d2056bb6c5c1'
           }
       })
       .then(res => res.json())
      .then(result => {
          resolve(result);
      })
      .catch(err => reject(err))
  });

(async () => {
    const reff = readlineSync.question('[?] Reff: ')
    const jumlah = readlineSync.question('[?] Jumlah reff: ')
    console.log("")
    for (var i = 0; i < jumlah; i++){
    try {
        let addressData = ethWallet.generate();
        const eth = addressData.getPrivateKeyString()
        const first = random.first()
        const rand = randomize('0', 5)
        const last = random.last()
        const email = `${first}${rand}@gmail.com`
        const satu = randomize('0', 3)
        const dua = randomize('0', 3)
        const tiga = randomize('0', 3)
        const pat = randomize('0', 3)
        const ip = `${satu}.${dua}.${tiga}.${pat}`
        const regist = await functionRegist(first, last, email, ip, eth, reff)
        if(regist.user_id != 0){
            console.log(`[${i+1}] SUKSES !`)
        } else {
            console.log(`[${i+1}] GAGAL !\n`)
        }
    } catch (e) {
        console.log(e)
    }
}
})()
