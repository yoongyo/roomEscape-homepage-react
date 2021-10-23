import React, {useState, useEffect} from 'react';
import { BACKEND_URL, ROOMESCAPE_ID } from '../../api/backendURL';



export const AdminThemeList = () => {
    const [themes, setThemes] = useState([]);

    // useEffect(() => {
    //     fetch(BACKEND_URL + ROOMESCAPE_ID + '/themes', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'Application/json'
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         setThemes(data);
    //     })
    // },[])

    return (
        <div>
            <table className="table-auto text-center border-collapse w-full">
                <thead className="border">
                    <tr className="border">
                        <th>번호</th>
                        <th>이름</th>
                        <th>태그</th>
                        <th>타임_1</th>
                        <th>타임_2</th>
                        <th>타임_3</th>
                        <th>타임_4</th>
                        <th>타임_5</th>
                        <th>타임_6</th>
                        <th>타임_7</th>
                        <th>타임_8</th>
                        <th>타임_9</th>
                        <th>타임_10</th>
                        <th>타임_11</th>
                        <th>타임_12</th>
                        <th>난이도</th>
                        <th>진행시간</th>
                        <th>최소인원</th>
                        <th>최대인원</th>
                        <th>관리자</th>
                    </tr>
                </thead>
                <tbody className="broder">
                    <tr className="border">
                        <td rowSpan={2}>1</td>
                        <td>몬스터하우스</td>
                        <td>#장치많음</td>
                        <td>11:00</td>
                        <td>12:00</td>
                        <td>13:00</td>
                        <td>14:00</td>
                        <td>15:00</td>
                        <td>16:00</td>
                        <td>17:00</td>
                        <td>18:00</td>
                        <td>19:00</td>
                        <td>20:00</td>
                        <td>21:00</td>
                        <td>22:00</td>
                        <td>3</td>
                        <td>60</td>
                        <td>2명</td>
                        <td>6명</td>
                        <td>수정/삭제</td>
                    </tr>
                    <tr>
                    <td colSpan={22}>dd</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}