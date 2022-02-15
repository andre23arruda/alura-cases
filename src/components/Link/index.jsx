import NextLink from "next/link";

export default function Link({ children, ...props }) {
    return (
        <NextLink href={ href } passHref {...props}>
            { children }
        </NextLink>
    )
}