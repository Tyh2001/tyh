import avatar from '../../assets/images/avatar.jpg'
import { XIcon, GithubIcon, SponsorIcon } from '../../components'
import cityWalk from '../../assets/images/city-walk.jpg'
import fightingDesign from '../../assets/images/fighting-design.jpg'
import './index.css'

/**
 * 首页
 */
export const Home = () => {
  /**
   * 社交主页
   */
  const socials = [
    { title: 'Github', icon: GithubIcon, account: '', link: 'https://github.com/Tyh2001' },
    { title: '𝕏', icon: XIcon, account: '@tyh20011', link: 'https://x.com/intent/user?screen_name=tyh20011' },
  ]

  /**
   * 计算年龄
   * 
   * @param birthDateString 
   * @returns 
   */
  const calculateAge = (birthDateString: string): number => {
    // 将传入的日期字符串转换为日期对象
    const birthDate = new Date(birthDateString)

    // 获取当前日期
    const today = new Date()

    // 计算年龄
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDifference = today.getMonth() - birthDate.getMonth()

    // 调整年龄，如果当前月份还没有达到生日月份，或者是生日月份但日期还没到
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }

    return age
  }

  return <div className=" p-16 h-screen bg-[#fff] relative flex overflow-y-auto justify-between">
    {/* 左侧部分 */}
    <div className='flex sticky top-0 min-w-[420px]'>
      <div className='flex flex-col flex-1 justify-between'>
        {/* 我的信息 */}
        <div className=''>
          <img className=' w-[188px] h-[188px] rounded-full' src={avatar} alt="My avatar" />
          <div className=' text-[44px] font-bold'>Yuhao Tian</div>
          <div>{calculateAge('2001-09-17')},</div>
          <div>I am a developer,</div>
          <div>form HangZhou,China.</div>
        </div>

        {/* 底部第三方链接 */}
        <div className='flex items-center'>
          <div className='cursor-pointer bg-[#e350af] w-[190px] h-[70px] rounded-[26px] flex justify-center items-center text-[#fff] text-[18px] font-bold'>
            <i className=' text-[20px]'>
              <SponsorIcon />
            </i>
            Sponsor me
          </div>
        </div>
      </div>
    </div>

    {/* 右侧部分 */}
    <div className='relative flex flex-col space-y-10'>
      {/* 我的项目 */}
      <div className='flex space-x-3'>
        <div className='w-[380px] h-[380px] rounded-[40px] bg-slate-200 p-[30px] box-border flex flex-col justify-between'>
          <div className='flex flex-col space-y-7'>
            <div className='flex items-center space-x-3'>
              <img src={cityWalk} className='w-[80px] h-[80px] rounded-[20px]' />
              <div className=' font-bold text-[23px]'>City Walk App</div>
            </div>

            <div className=' text-[17px]'>Record every place you have walked.</div>
          </div>

          <div className='flex justify-end'>
            <div className='cursor-pointer bg-[orange] w-[90px] h-[45px] rounded-[20px] flex justify-center items-center text-[#fff] text-[18px] font-bold'>Join</div>
          </div>
        </div>

        <div className='w-[380px] h-[380px] rounded-[40px] bg-slate-200 p-[30px] box-border flex flex-col justify-between'>
          <div className='flex flex-col space-y-7'>
            <div className='flex items-center space-x-3'>
              <img src={fightingDesign} className='w-[80px] h-[80px] rounded-[20px]' />
              <div className=' font-bold text-[23px]'>Fighting Design</div>
            </div>

            <div className=' text-[17px]'>Fighting design can quickly build interactive interfaces in vue3 applications, which looks good.</div>
          </div>

          <div className='flex justify-end'>
            <div className='cursor-pointer bg-[#2d5af1] w-[90px] h-[45px] rounded-[20px] flex justify-center items-center text-[#fff] text-[18px] font-bold'>Join</div>
          </div>
        </div>
      </div>

      {/* 社交列表 */}
      <div className=' flex flex-col space-y-3'>
        <div className='text-[#333] text-[38px] font-bold'>Social</div>
        <div className='flex space-x-3'>
          {
            socials.map((item, index) => {
              return <a href={item.link} key={index} target="_blank" className='shrink-on-click transition-transform duration-200 flex bg-[#eee] w-[180px] h-[180px] rounded-[40px] p-[24px] flex-col justify-between'>
                <div>
                  <i>
                    <item.icon />
                  </i>
                  <div>{item.title}</div>
                </div>
                <div>{item.account}</div>
              </a>
            })
          }
        </div>
      </div>

      {/* 技能列表 */}
      <div className=' flex flex-col space-y-3'>
        <div className='text-[#333] text-[38px] font-bold'>Skills</div>
        <img src="https://skillicons.dev/icons?i=js,html,css,ts,swift,nodejs,nest,vue,react,md,mysql,npm,pnpm,postman,vitest,ps,github,figma&perline=8" alt="My skills" />
      </div>

      {/* 希望 */}
      <div className='flex flex-col space-y-3'>
        <div className='text-[#333] text-[38px] font-bold'>Hopes</div>
      </div>

      {/* tesla */}
      <div className=' w-[600px] h-[400px] relative rounded-[20px]'>
        <video
          width="600"
          height="100"
          className=' rounded-[20px]'
          autoPlay
          loop
          muted
        >
          <source src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-3-Performance-End-of-Page-Desktop-LHD.mp4" type="video/mp4" />
        </video>

        <div className=' absolute bottom-0 right-0 left-0 h-[50px] bg-red-300 rounded-b-[20px] flex items-center p-[12px]'>
          <div className=' text-[20px] text-[#fff] font-bold'>
            I hope to have my own Tesla
          </div>
        </div>
      </div>

      <div>
        <a href="https://beian.miit.gov.cn" target="_blank">浙ICP备2021024540号-2</a>
      </div>
    </div>
  </div>
}