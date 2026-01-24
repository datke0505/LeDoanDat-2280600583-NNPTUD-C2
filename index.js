

// Câu 1: Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}
// Câu 2: Khởi tạo mảng products
const products = [
    new Product(1, "Bàn phím cơ", 50, 20, "Accessories", true),
    new Product(2, "Chuột Logitech", 25, 10, "Accessories", true),
    new Product(3, "Màn hình Dell", 200, 5, "Electronics", true),
    new Product(4, "Tai nghe Sony", 150, 0, "Accessories", false),
    new Product(5, "Loa Bluetooth", 45, 12, "Electronics", true)
];
// Câu 3: Tạo mảng mới chỉ chứa name, price
const basicInfo = products.map(p => ({ name: p.name, price: p.price }));
console.log("C3 - Thông tin cơ bản:", basicInfo);
// Câu 4: Lọc sản phẩm còn hàng (quantity > 0)
const inStock = products.filter(p => p.quantity > 0);
console.log("C4 - Sản phẩm còn hàng:", inStock)
// Câu 5: Kiểm tra có ít nhất một sản phẩm giá trên 30
const isExpensiveExist = products.some(p => p.price > 30);
console.log("C5 - Có SP trên 30$:", isExpensiveExist);
// Câu 6: Kiểm tra tất cả "Accessories" có đang bán không
const isAllAccAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);
console.log("C6 - Tất cả Accessories đang bán:", isAllAccAvailable);
// Câu 7: Tính tổng giá trị kho hàng
const totalValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
console.log("C7 - Tổng giá trị kho:", totalValue);
// Câu 8: Dùng for...of duyệt mảng và in ra
console.log("C8 - Danh sách sản phẩm:");
for (const p of products) {
    console.log(`${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}
// Câu 9: Dùng for...in in ra thuộc tính và giá trị (demo SP đầu tiên)
console.log("C9 - Chi tiết thuộc tính SP đầu tiên:");
for (const key in products[0]) {
    console.log(`${key}: ${products[0][key]}`);
}
// Câu 10: Lấy danh sách tên SP đang bán và còn hàng
const resultNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
console.log("C10 - Tên SP đang bán & còn hàng:", resultNames);