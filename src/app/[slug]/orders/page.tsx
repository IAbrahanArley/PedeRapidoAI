import { isValidCpf } from "@/helpers/valid-cpf";

import CpfForm from "./components/cpf-form";

interface OrderPageProps {
    searchParams: Promise<{cpf: string}>;
}
const OrderPage = async ({searchParams}: OrderPageProps) => {
const { cpf } = await searchParams;
if(!cpf){
    return <CpfForm />;
}
if(!isValidCpf(cpf)){
    return<CpfForm />;
}

    return ( 
        <div>
            <h1>Order Page</h1>
        </div>
     );
}
 
export default OrderPage;