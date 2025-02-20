import { db } from "@/lib/prisma";

import ProductHeader from "./components/products-header";

interface ProductPageProps {
    params: Promise<{slug: string, productId: string}>
}

const ProductPage = async ({params}: ProductPageProps) => {
    const {slug, productId} = await params;
    const product = await db.product.findUnique({
        where: {
            id: productId
        }
    });
    if(!product) {
        return {
            notFound: true
        }
    }
 
    return ( 
        <>
            <ProductHeader product={product} />
            <h1>Product Page</h1>
            <p>Slug: {slug}</p>
            <p>Product Id: {productId}</p>
        </>
    );
}
 
export default ProductPage;