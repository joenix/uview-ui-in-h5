import validation from "./test.js";

// 添加单位，如果有px，%，px等单位结尾或者值为auto，直接返回，否则加上px单位结尾
export default function addUnit(value = "auto", unit = "px") {
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return validation.number(value) ? `${value}${unit}` : value;
}
