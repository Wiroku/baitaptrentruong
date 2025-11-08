const Trang2 = () => {
  const dssv = [
    {
      id: 1,
      hoten: "Huỳnh Hà Duy Khánh ",
      lop: "K18",
      email: "kh30826@.edu.vn",
      anh: "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/494478626_1182234286733777_8921185522987939122_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeECjhCv0mshjhXD7SGXrhyyiWM6mUop6maJYzqZSinqZihO8-KrDn2yXu1NnxmWG-To_nVQHVcUCHQ7khyTEUm3&_nc_ohc=meBXYlJoUMIQ7kNvwEHJTUU&_nc_oc=AdkIxd5hTEFIQiYcFPZW3KCIAVj2gpiSj-TiNhla7hNBJhYXwMIjUpzEwG_N9ZTju_ByURJ7kj31j_-eIHWMVILH&_nc_zt=23&_nc_ht=scontent-hkg4-1.xx&_nc_gid=DB1B1DvLJHYiA1gbyWA5cg&oh=00_AfjB8mHXzZWNWZcrsH5emMc7KlcC0VQMFdVx10vCZRyCAg&oe=69121AC4",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh", // Chiếm toàn bộ chiều cao màn hình
        display: "flex",
        justifyContent: "center", // Căn giữa ngang

        backgroundColor: "#f9f9f9", // Tuỳ chọn
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
          maxWidth: "1000px", // Giới hạn chiều rộng
          width: "100%",
        }}
      >
        {dssv.map((motsinhvien) => (
          <div
            key={motsinhvien.id}
            style={{
              height: "300px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={motsinhvien.anh}
              alt={motsinhvien.hoten}
              style={{
                height: "140px",

                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <h3 style={{ margin: "10px 0 5px" }}>{motsinhvien.hoten}</h3>
            <p>{motsinhvien.lop}</p>
            <p>{motsinhvien.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trang2;
