/**
 * images/ に画像を置いて、GYAZO_TOKENを渡すとアップロードする
 */
import Gyazo  from 'gyazo-api';
import fsPromises from 'fs/promises';
import path from 'path';

const client = new Gyazo(process.env.GYAZO_TOKEN);
const imageDir = path.resolve('./images');

(async () => {
  const uploads = (await fsPromises.readdir(imageDir))
    .filter(name => name !== '.gitkeep')
    .map((name, index) => client.upload(path.join(imageDir, name), {
      title: "https://vaccines-kyoto-city.jp/#faq Page " + (index + 1),
      desc: "https://vaccines-kyoto-city.jp/#faq"
    }));
    for await (const res of uploads) {
      console.log(res.data.permalink_url);
    }
})();

/*
const arr = new Array(21);
const getJsons = [
"https://gyazo.com/9bbe4792f519164ada7493ae12993690",
"https://gyazo.com/de7b4d8b47aeb3832a54906a84daf1fe",
"https://gyazo.com/0e2770a5c263a52ec8925355a2254295",
"https://gyazo.com/afedc5c681321d878621efdbc7ad610b",
"https://gyazo.com/654ced1af6332477d3e780f933bbaf54",
"https://gyazo.com/a643d2bb52a4adde8f13d77264939f59",
"https://gyazo.com/15004d2c8569a32686455209ae4b0ce4",
"https://gyazo.com/4f71e29cb23144dd3963a2e9c1653982",
"https://gyazo.com/5ef8255c1caa62288f0373df7b67bf7e",
"https://gyazo.com/98669dbcb6482f786eb17552a28c1cd0",
"https://gyazo.com/16098a6cbc645382bbf0227c229042ae",
"https://gyazo.com/d6c277f22e0f79a26c108afa86a24a14",
"https://gyazo.com/317b50695d1f7f4324b4d8f3d4568031",
"https://gyazo.com/f1e2323f1ca00cd93862a0441bee01cd",
"https://gyazo.com/14a32e4097797bf465473c52396f8f8e",
"https://gyazo.com/c7eaf74fcf6fc877cdf72af38ca7787c",
"https://gyazo.com/ec2964f71ddb4619ba1c8f6c7a75ca2e",
"https://gyazo.com/1ae78bd90c7ec6a08877a530322fbc13",
"https://gyazo.com/02112e894dd33e7b8a5d3258c561a7dc",
"https://gyazo.com/1840c1ae7f2f07541bfe80e278b24ba3",
"https://gyazo.com/790f77e7ab82e145c749de3e1de7dfc7"]
  .map(url => fetch(url + '.json'));
for await (const res of getJsons) {
  const json = await res.json();
  const num = json.metadata.title.replace('https://vaccines-kyoto-city.jp/#faq Page ', '');
  arr[num] = json.metadata.ocr.description;
}
arr
*/
