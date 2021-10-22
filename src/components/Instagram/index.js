import InstagramEmbed from 'react-instagram-embed';


export default function Instagram() {
  return (
    <InstagramEmbed
      url='https://www.instagram.com/_barclayrexcigarlounge/'
      clientAccessToken={process.env.NEXT_PUBLIC_INSTAGRAMAPIID}
      maxWidth='100%'
      hideCaption={false}
      containerTagName='div'
      protocol=''
      injectScript
      onLoading={() => { }}
      onSuccess={() => { }}
      onAfterRender={() => { }}
      onFailure={() => { }}
    />
  )
}