import Link from 'next/link'
import React, {FunctionComponent} from 'react'
import Layout from '../components/Layout'

const IndexPage: FunctionComponent = () => (
    <Layout title="Home | Next.js + TypeScript Example">
        <h1>Hello Next.js 👋</h1>
        <p>
            <Link href="/about">
                <a>About</a>
            </Link>
        </p>
    </Layout>
)

export default IndexPage
