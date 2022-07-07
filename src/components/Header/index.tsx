import React from 'react'
import { Helmet } from "react-helmet"
import { SEO_HEADER } from 'src/constants';


interface IHeaderProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string
}

const Header = (props: IHeaderProps) => {
    const { title = SEO_HEADER.title, description = SEO_HEADER.description, image = SEO_HEADER.image, url = SEO_HEADER.url } = props;

    return (
        <Helmet>
            <title>{title}</title>
            <link rel="icon" type="image/png" href="/assets/logo_16.png" sizes='16x16' />
            <meta property="og:title" content={title} data-rh="true" />
            <meta property="og:description" content={description} data-rh="true" />
            <meta property="og:image" content={image} data-rh="true" />
            <meta property="og:url" content={url} data-rh="true" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="imagecaptionai" />
            <meta name="twitter:creator" content="@sanjivG" />
            <meta property="og:url" content={SEO_HEADER.url} />
        </Helmet>
    )
}

export default Header