/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router"

export default function name() {
 const router = useRouter();
 console.log(router);
 return <div>Page is name</div>
}