import './Footer.css';

export const Footer: React.VFC = () => {
  return(
    <footer className='foo'>
      <p>
        このウェブページでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
      </p>
      <p>
        This webpage is created by{' '}
        <a href='https://github.com/pastak' target='_blank' rel='noreferrer'>
          @pastak
        </a>
      </p>
    </footer>
  )
}
