import React from 'react';


export const BookingList = () => {
    return (
        <div className="px-1 max-w-6xl mx-auto">
            <p className="text-center py-10 font-bold text-3xl">오늘 예약자 관리</p>
            <table className="mx-auto text-center text-mo md:text-2xl w-full">
                <thead className="border-t border-b">
                    <tr>
                        <th className="py-2">예약자</th>
                        <th className="py-2">예약일</th>
                        <th className="py-2">예약시간</th>
                        <th className="py-2">테마</th>
                        <th className="py-2">인원</th>
                        <th className="py-2">전화번호</th>
                        <th className="py-2">결제방법</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                        <td>관리자</td>
                        <td>2021-10-10</td>
                        <td>20:55</td>
                        <td>우디구출작전</td>
                        <td>2</td>
                        <td>010-3076-3572</td>
                        <td>현장결제</td>
                    </tr>
                    <tr className="border-b">
                        <td>관리자</td>
                        <td>2021-10-10</td>
                        <td>20:55</td>
                        <td>우디구출작전</td>
                        <td>2</td>
                        <td>010-3076-3572</td>
                        <td>현장결제</td>
                    </tr>
                    <tr className="border-b">
                        <td>관리자</td>
                        <td>2021-10-10</td>
                        <td>20:55</td>
                        <td>우디구출작전</td>
                        <td>2</td>
                        <td>010-3076-3572</td>
                        <td>현장결제</td>
                    </tr>
                    <tr className="border-b">
                        <td>관리자</td>
                        <td>2021-10-10</td>
                        <td>20:55</td>
                        <td>우디구출작전</td>
                        <td>2</td>
                        <td>010-3076-3572</td>
                        <td>현장결제</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}