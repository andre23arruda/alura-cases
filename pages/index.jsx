import Link from "next/link";

function Title({ children, as }) {
    const Tag = as
    return (
        <>
            <Tag>
                { children }
            </Tag>

            <style jsx>{`
                ${ Tag } {
                    color: red
                }
            `}</style>
        </>
    )
}

export default function HomePage() {
    return (
        <div>
            <Title as="h2">Alura Cases</Title>

            <Link href="/faq" passHref>
                <a>Ir a FAQ</a>
            </Link>
        </div>
    )
}