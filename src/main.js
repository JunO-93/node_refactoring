import { statement } from './chapter01/function/statement.js';
import invoices from './chapter01/data/invoices.json';
import plays from './chapter01/data/plays.json';

// statement 함수 실행
const invoice = invoices[0]; // 첫 번째 청구서 사용 (또는 원하는 인덱스)
const result = statement(invoice, plays);

// 또는 HTML에 표시하려면
const app = document.getElementById('app');
if (app) {
    app.innerHTML = `<pre style="font-size:25px;">${result}</pre>`;
}
