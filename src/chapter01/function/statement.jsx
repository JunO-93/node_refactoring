import {createStatementData} from "./createStatementData.jsx";

export function statement(invoice, plays) {
    return renderPlainText(createStatementData(invoice, plays));

    function renderPlainText(data) {
        let result = `청구 내역 (고객명: ${data.customer})\n`
        for (let perf of data.performances) {
            // 청구 내역을 출력한다.
            result += `${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`;
        }
        result += `총액: ${usd(data.totalAmout)}\n`;
        result += `적립 포인트: ${data.volumeCredits}점\n`;
        return result
    }

    function htmlStatement(invoice, plays) {
        return renderHtml(createStatementData(invoice, plays));
    }

    function renderHtml(data) {
        let result = `<h1>청구 내역 (고객명: ${data.customer})</h1>`;
        result +="<table>\n";
        result +="<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>"
        for (let perf of data.performances) {
            result += `   <tr><td>${perf.play.name}</td><td>${perf.audience}</td></tr>`
            result += `<td>${perf.amount}</td>`
        }
        result +="</table>\n";
        result += `<p>총액: <em>${usd(data.totalAmout)}</em></p>`
        result += `<p>적립 포인트: <em>${data.volumeCredits}</em></p>`
        return result
    }

    function usd(aNumber) {
        return new Intl.NumberFormat(
            'en-US',
            {style: 'currency', currency: 'USD', minimumFractionDigits: 2}).format(aNumber / 100);
    }
}


