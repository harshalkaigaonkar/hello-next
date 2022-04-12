/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router"

export default function hello(){
 const router = useRouter();
 console.log(router);
 return <h1>This is {router.query.helo}</h1>
}