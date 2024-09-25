import Link from 'next/link'
import { FaFilm } from 'react-icons/fa6'

type item = {
    name: string;
    path: string;
}

type list = {
    category: string;
    item: item[];
}

const lists = [
    {
        category: "Phim mới",
        item: [
            {
                name: "Phim Khoa Học",
                path: "/"
            },
            {
                name: "Phim Kinh dị",
                path: "/"
            },
            {
                name: "Phim Chiếu rạp",
                path: "/"
            },
            {
                name: "Phim Hình sự",
                path: "/"
            },
            {
                name: "Phim Hành Động",
                path: "/"
            },
        ]
    },
    {
        category: "Phim hay",
        item: [
            {
                name: "Phim Âu Mỹ",
                path: "/"
            },
            {
                name: "Phim Hàn Quốc",
                path: "/"
            },
            {
                name: "Phim Trung Quốc",
                path: "/"
            },
            {
                name: "Phim Nhật Bản",
                path: "/"
            },
            {
                name: "Phim Thái Lan",
                path: "/"
            },
        ]
    },
    {
        category: "Thông tin",
        item: [
            {
                name: "Giới Thiệu",
                path: "/"
            },
            {
                name: "Liên Hệ Chúng Tôi",
                path: "/"
            },
            {
                name: "Điều Khoản Sử Dụng",
                path: "/"
            },
            {
                name: "Chính Sách Riêng Tư",
                path: "/"
            },
            {
                name: "Khiếu Nại Bản Quyền",
                path: "/"
            },
        ]
    },
]

const Footer = () => {
  return (
    <div className='w-full p-4 md:p-12 bg-slate-800 text-white'>
        <div className="container mx-auto">
            <div className="grid md:grid-cols-10 gap-2 grid-rows-1 sm:grid-rows-1 md:gap-10">
                <div className='row-span-1 md:col-span-3 p-4'>
                    <Link
                        href="/"
                        className="flex items-center gap-2 font-bold tracking-[4px] text-2xl mb-5">
                        <FaFilm className="text-xl" />
                        HT
                    </Link>
                    <p><span className='text-blue-600'>HT</span> - Trang xem phim Online với giao diện mới được bố trí và thiết kế thân thiện với người dùng. Nguồn phim được tổng hợp từ các website lớn với đa dạng các đầu phim và thể loại vô cùng phong phú.</p>
                </div>
                <div className="col-span-1 hidden lg:block"></div>
                <div className='hidden grid-cols-3 sm:grid md:col-span-6'>
                    {
                        lists.map((list:list) => (
                            <div key={list.category} className='col-span-1 p-4'>
                                <h3 className='font-bold mb-4'>{list.category}</h3>
                                {list.item.map((i:item, index:number) => (
                                <Link
                                    key={index}
                                    href={i.path}
                                    className='block text-blue-500 hover:underline'
                                >
                                    {i.name}
                                </Link>
                                ))}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer