import { 
    add, subtract, multiply, PI 
} from "./math.js";
import { 
    toUpper, reverseString, APP_NAME 
} from "./string.js";

document.getElementById("btnRunProject").addEventListener("click", () => {
    let result = "";
    const a = 5;
    const b = 3;
    result += `APP START: ${APP_NAME}<br>`;
    result += `Cong(+): ${add(a, b)}<br>`;
    result += `Tru(-): ${subtract(a, b)}<br>`;
    result += `Nhan(*): ${multiply(a, b)}<br>`;
    result += `PI: ${PI}<br>`;
    result += `Upper: ${toUpper("nguyen duc hieu")}<br>`;
    result += `Reverse: ${reverseString("Test Code JavaScript")}<br>`;

    document.getElementById("printProject").innerHTML = result;
    console.log("APP START:", APP_NAME);
    console.log("Cong(+):", add(a, b));
    console.log("Tru(-):", subtract(a, b));
    console.log("Nhan(*):", multiply(a, b));
    console.log("PI:", PI);
    console.log("Upper:", toUpper("nguyen duc hieu"));
    console.log("Reverse:", reverseString("Test Code JavaScript"));
});
