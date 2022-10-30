import { rest } from "msw";

export default [
  rest.get("/products", (req, res, ctx) => {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        id: i + 1,
        img: [
          "aogio.jpg",
          "aogio1.jpg",
          "aogio2.jpg",
          "aogio3.jpg",
          "aogio4.jpg",
        ],
        title: "ÁO GIÓ 2 MẶT 2 LỚP THOÁNG MÁT",
        defaultPrice: Math.ceil(Math.random() * 1000000) + 100000,
        price: 0,
        vote: Math.ceil(Math.random() * 5) + 1,
        saleValue: Math.ceil(Math.random() * 50),
        qty: Math.ceil(Math.random() * 5000) + 1000,
        type: Math.ceil(Math.random() * 4) + 1,
        dateCreate: "",
        lastDateUpdate: "",
        soldQty: Math.ceil(Math.random() * 5000) + 1000,
        comments: [
          {
            userId: Math.ceil(Math.random() * 100),
            description: "Good",
            vote: Math.ceil(Math.random() * 5) + 1,
          },
          {
            userId: Math.ceil(Math.random() * 100),
            description: "Bad",
            vote: Math.ceil(Math.random() * 5) + 1,
          },
          {
            userId: Math.ceil(Math.random() * 100),
            description: "Not good",
            vote: Math.ceil(Math.random() * 5) + 1,
          },
          {
            userId: Math.ceil(Math.random() * 100),
            description: "Not Bad",
            vote: Math.ceil(Math.random() * 5) + 1,
          },
          {
            userId: Math.ceil(Math.random() * 100),
            description: "Perfect",
            vote: Math.ceil(Math.random() * 5) + 1,
          },
        ],
      });
      data[i].price = (data[i].defaultPrice * (100 - data[i].saleValue)) / 100;
    }
    return res(ctx.json(data.sort((a, b) => b.saleValue - a.saleValue)));
  }),
  rest.get("/products/:productId", (req, res, ctx) => {
    const { productId } = req.params;
    if (productId > 100) {
      return res(
        ctx.status(400),
        ctx.set("Content-Type", "application/json"),
        ctx.json({
          errorMessage: "khong co id",
        })
      );
    }

    const defaultPrice1 = Math.ceil(Math.random() * 1000000) + 100000;
    const saleValue1 = Math.ceil(Math.random() * 50);

    return res(
      ctx.json({
        id: productId,
        img: [
          "aogio.jpg",
          "aogio1.jpg",
          "aogio2.jpg",
          "aogio3.jpg",
          "aogio4.jpg",
        ],
        title: "ÁO GIÓ 2 MẶT 2 LỚP THOÁNG MÁT",
        defaultPrice: defaultPrice1,
        saleValue: saleValue1,
        price: (defaultPrice1 * (100 - saleValue1)) / 100,
        vote: Math.ceil(Math.random() * 5) + 1,
        qty: Math.ceil(Math.random() * 5000) + 1000,
        type: Math.ceil(Math.random() * 4) + 1,
        dateCreate: "",
        lastDateUpdate: "",
        soldQty: Math.ceil(Math.random() * 5000) + 1000,
        color: ["Cam-Ghi", "Đen-Rêu", "Than-Ghi", "Đen-Ghi"],
        size: ["M", "L", "XL", "XXL"],
        comments: [
          {
            userId: Math.ceil(Math.random() * 100),
            description: "Good",
            vote: Math.ceil(Math.random() * 5) + 1,
          },
          {
            userId: Math.ceil(Math.random() * 100),
            description: "Bad",
            vote: Math.ceil(Math.random() * 5) + 1,
          },
          {
            userId: Math.ceil(Math.random() * 100),
            description: "Not good",
            vote: Math.ceil(Math.random() * 5) + 1,
          },
          {
            userId: Math.ceil(Math.random() * 100),
            description: "Not Bad",
            vote: Math.ceil(Math.random() * 5) + 1,
          },
          {
            userId: Math.ceil(Math.random() * 100),
            description: "Perfect",
            vote: Math.ceil(Math.random() * 5) + 1,
          },
        ],
      })
    );
  }),
  rest.get("/users", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: "hau bui",
          age: 25,
          team: "Dev",
        },
        {
          id: 2,
          name: "van tam",
          age: 20,
          team: "Test",
        },
      ])
    );
  }),
  rest.get("/users/:userId", (req, res, ctx) => {
    const { userId } = req.params;
    if (userId > 2) {
      return res(
        ctx.status(400),
        ctx.set("Content-Type", "application/json"),
        ctx.json({
          errorMessage: "khong co id",
        })
      );
    }
    return res(
      ctx.json({
        id: userId,
        firstName: "John",
        lastName: "Maverick",
      })
    );
  }),
  rest.delete("/users/:userId", (req, res, ctx) => {
    const { userId } = req.params;
    return res(
      ctx.json({
        id: userId,
        name: "hau bui",
        age: 25,
        team: "Dev",
      })
    );
  }),
  rest.post("/account/login", async (req, res, ctx) => {
    const { username, password } = await req.json();

    if ("vanhau" === username && password === "123456") {
      return res(
        ctx.json({
          username,
          password,
          jwt: "eyJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6IjEyMzQ1NiIsInVzZXJuYW1lIjoiaGF1dmlwdHQifQ.633Y_0dnhs9EsqwKXmKCPkp8chOhO2I3o21haxzsXTc",
        })
      );
    }
  }),
  rest.get("/cart", (req, res, ctx) => {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        id: i + 1,
        img: [
          "aogio.jpg",
          "aogio1.jpg",
          "aogio2.jpg",
          "aogio3.jpg",
          "aogio4.jpg",
        ],
        title: "ÁO GIÓ 2 MẶT 2 LỚP THOÁNG MÁT",
        defaultPrice: Math.ceil(Math.random() * 1000000) + 100000,
        price: 0,
        vote: Math.ceil(Math.random() * 5) + 1,
        saleValue: Math.ceil(Math.random() * 50),
        qty: Math.ceil(Math.random() * 5) + 1,
        total: 0,
      });
      data[i].price = (data[i].defaultPrice * (100 - data[i].saleValue)) / 100;
      data[i].total = data[i].price * data[i].qty;
    }
    return res(ctx.json(data));
  }),
  rest.get("/employees", (req, res, ctx) => {
    const data = [];
    const addresses = [
      "Đà Nẵng",
      "Quảng Nam",
      "Quảng Ngãi",
      "Phú Yên",
      "Huế",
      "Nha Trang",
      "Quy Nhơn",
    ];
    const positions = [
      "Nhân viên marketing",
      "Nhân viên bán hàng",
      "Nhiên viên CSKH",
      "Nhân viên kho",
      "Quản lý",
    ];

    for (let i = 0; i < 25; i++) {
      data.push({
        id: i + 1,
        avt: "AVT.jpeg",
        name: "Nguyễn Thị " + String.fromCharCode(65 + i),
        address: addresses[Math.floor(Math.random() * addresses.length)],
        birthday: "27/10/1997",
        gender: Math.round(Math.random()),
        phoneNumber: Math.ceil(Math.random() * 100000000) + 100000000,
        position: positions[Math.floor(Math.random() * positions.length)],
        status: Math.round(Math.random()),
      });
    }
    return res(ctx.json(data));
  }),
];
