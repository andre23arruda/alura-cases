import Link from "../src/components/Link"
import PageTitle from "../src/components/Title"
import FAQScreen from "../src/screens/FAQScreen"

// export async function getServerSideProps(context) {
//     console.log('Em modo DEV sempre roda a cada acesso')
//     console.log('Em modo PROD sempre roda a cada acesso')
export async function getStaticProps(context) {
    // console.log('Em modo DEV sempre roda a cada acesso')
    // console.log('Em modo PROD só roda no build, pois gera os estáticos')
    const API_DATA_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(API_DATA_URL)
        .then(response => {
            return response.json()
        })
        .then(response_json => {
            return response_json
        })
    return {
        props: {
            faq
        },
    }
}

export default FAQScreen