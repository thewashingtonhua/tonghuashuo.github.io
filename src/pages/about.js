import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './about.scss'
import brain from '../images/about/brain.png'
import wechat from '../images/about/wechat.png'

const START_DATE = new Date(2016, 2, 1, 10, 0, 0)
const DAYS_PER_MONTH = 365 / 12

export default class About extends PureComponent {

  state = {
    experience: ''
  }

  updateExperience = () => {
    const now = new Date()
    const secondsPassed = (now - START_DATE) / 1000
    const daysPassed = secondsPassed / 60 / 60 / 24

    const year = Math.floor(daysPassed / 365)
    const month = Math.floor(daysPassed / DAYS_PER_MONTH % 12)
    const day = Math.floor(daysPassed % DAYS_PER_MONTH)
    const hour = Math.floor(secondsPassed / 60 / 60 % 24)
    const minute = Math.floor(secondsPassed / 60 % 60)
    const second = Math.floor(secondsPassed % 60)

    this.setState({
      experience: `（工作经验：${year} 年 ${month} 个月 ${day} 天 ${hour} 小时 ${minute} 分钟 ${second} 秒）`
    })
  }

  render () {
    const { experience } = this.state

    return (
      <Layout>
        <SEO
          title='我'
          keywords={this.props.data.site.siteMetadata.keywords}
        />
        <div className='mf-content' id='about'>
          <article>

            <h1>我</h1>
            <img src={brain} alt='Code in my left brain. Color in my right brain.' />
            <p>JavaScript 开发者一枚<span id='experience'>{experience}</span></p>
            <p>左脑代码，右脑色彩，游走于“懂设计的开发者”和“懂开发的设计师”之间</p>
            <p>大前端信徒，坚信 JavaScript 才是未来，致力于为更美好的 Web 贡献自己的力量</p>
            <p>摄影爱好者 / 半拉设计师 / Adobe 死忠 / 谷粉 / 小米脑残粉 / 乌克丽丽噪音专家</p>
            <p>欢迎来 Github 上关注我：<a target='_blank' href='http://github.com/tonghuashuo'>@tonghuashuo</a></p>
            <p>或给我来信：<a target='_blank' href='mailto:ideal19920402@gmail.com'>ideal19920402@gmail.com</a></p>
            <p>或微信上撩我：</p>
            <img src={wechat} width='320' alt='扫一扫加我微信' />

            <h1>为什么写博客</h1>
            <ul>
              <li>把“以为懂了”的东西讲给别人听，以此验证是否真的懂了，顺带加深记忆。</li>
              <li>Review 自己的代码，看有哪些是可以优化的，哪些甚至是解释不通的。</li>
              <li>锻炼自己的表达能力，让自己懂和让别人懂是两个境界。</li>
              <li>如果可能的话，为社区贡献一点有价值的内容。</li>
              <li>装逼这事儿没什么说不出口的。</li>
            </ul>

            <h1>顺便招人</h1>
            <p><a target='_blank' href='https://www.inex.exchange'>INEX</a> 招募前端开发工程师（坐标上海外滩）</p>
            <p>我们提供：</p>
            <ul>
              <li>不低于行业主流水平的薪资（具体多少您自己谈）</li>
              <li>略高于行业标配的福利待遇（全 Mac 环境、非格子间、有加班费）</li>
              <li>足够自由的发挥空间，确保您的洪荒之力不被禁锢（主流的前端技术栈我们都有相关实践）</li>
              <li>不傻逼的 Team Leader，不用担心把时间浪费在鸡同鸭讲上（这点很重要，真的）</li>
              <li>现代化的开发环境，可以大胆使用时下流行的技术，不用考虑上古时代浏览器的兼容性（该退休的就让它退休吧）</li>
            </ul>
            <p>我们希望你：</p>
            <ul>
              <li>是自认为足够优秀的 应届生 / 从业者（自己都不相信自己的，凭什么让别人相信你）</li>
              <li>有计科、软工、设计或其他相关专业背景（能力优秀者请看不到这一条）</li>
              <li>有良好的 HTML5、CSS3、ES 2015+ 基础（这是及格线）</li>
              <li>LESS / SCSS / PostCSS / CSS Modules / Styled-Components 至少熟悉一样（不止一样？那太棒了）</li>
              <li>熟悉 React 技术栈，对其内部运行机制有较为深入了解（如果实践过 SSR / 同构，那再好不过）</li>
              <li>对前端工程化有一定的实践，熟悉 Yarn、Webpack、Gulp、ESLint、Git 等常用工具（活在现代文明，只会刀耕火种可不行）</li>
              <li>有良好的编程习惯，对代码质量有追求（专业和业余的区别很大程度就体现在这里）</li>
              <li>有移动端开发经验，熟悉响应式设计（就问现在还有不是移动优先的吗？）</li>
              <li>熟悉 HTTP(S) 协议，对 REST 风格的 API 有足够的理解和实践（规范很重要）</li>
              <li>至少掌握一种服务端技术栈（语言不限）</li>
            </ul>
            <p>如果你：</p>
            <ul>
              <li>熟悉 Node.js 服务端/命令行开发的，果断加分</li>
              <li>对 RN、Weex、Electron 等 Native 端技术有研究的，果断加分</li>
              <li>有 Github 项目、技术博客 等的，果断加分</li>
              <li>英语足够好，阅读英文文档、博客无压力的，果断加分</li>
              <li>对新技术（包括但不限于大前端领域）保持好奇，敢于尝鲜和踩坑的，果断加分</li>
              <li>有良好的设计审美、产品 Sense，果断加分</li>
              <li>是 漂亮小姐姐/帅气小哥哥，果断加分</li>
            </ul>
            <p>简历发到：<a target='_blank' href='mailto:washington@dlab.com.cn'>washington@dlab.com.cn</a>（请务必提供作品，商业或个人的均可）</p>

          </article>

        </div>
      </Layout>
    )
  }

  componentDidMount () {
    this.updateExperience()

    this.timer = setInterval(this.updateExperience, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }
}

export const query = graphql`
query {
  site {
    siteMetadata {
      title,
      keywords
    }
  }
}`