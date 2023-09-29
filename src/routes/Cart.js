import { Table } from "react-bootstrap"

//Redux 사용 시 컴포넌트들이 props 없이 state 공유 가능
// 부모 자식간 props 전송 필요없어짐
function Cart(){
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>안녕</td>
                    <td>안녕</td>
                    <td>안녕</td>
                    </tr>
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart