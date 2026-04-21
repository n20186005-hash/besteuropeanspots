import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '迪基希历史溯源｜隐藏卢森堡的酿酒老城传奇，从罗马前哨到“啤酒花”摇篮的前世今生',
  description: '探索卢森堡隐秘古城迪基希：千年罗马马赛克、国家啤酒厂诞生地与阿登战役血泪记忆。一段被醇香与钢铁交织的小城史诗。',
}

export default function DiekirchHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '迪基希', href: '/attractions/diekirch-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`迪基希・Diekirch・卢森堡・迪基希`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在卢森堡北部舒缓的山谷中，迪基希静静枕着阿勒河。多数游客匆匆掠过，前往更知名的城堡与峡谷，却不知这里封存着大公国最古老的罗马遗产，以及让整个国家举杯的酿造之源。它并非教科书上的主角，却在历史的褶皱里，刻下了从罗马驻军、中世纪信仰到工业脉搏与战争伤疤的完整年轮。抛开游玩攻略，走进迪基希的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`迪基希`} />
                <InfoRow label="英文名称" value={`Diekirch`} />
                <InfoRow label="正式名称" value={`Diekirch`} />
                <InfoRow label="国家" value={`卢森堡`} />
                <InfoRow label="城市" value={`迪基希`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "迪基希的故事，始于流水与信仰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字本身，就是一部微缩的起源史。“迪基希”（Diekirch）源于古高地德语，由“<strong>Dieu</strong>”（上帝）与“<strong>Kirch</strong>”（教堂）组合而成。这直白地指向了其最初的聚落核心——一座献给上帝的教堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，早在教堂建立之前，罗马人敏锐的目光已落于此。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "约公元1世纪，罗马军团在贯穿卢森堡的天然通道——<strong>阿勒河</strong>畔，建立了一个定居点与渡口。这里并非宏伟的都市，而是一个功能性的<strong>前哨站</strong>，连接着特里尔与阿尔隆等重要罗马城镇。考古发现的罗马别墅地基与精美马赛克，诉说着当时驻军与官员在此的相对优渥生活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马帝国衰落后，居民并未完全离去。他们在靠近河流的更高处重建家园，围绕一座早期的礼拜场所逐渐形成村落。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "民间流传，一位早期传教士在此竖立十字架，河水为之让道，奠定了建堂的圣迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元8世纪左右，一座坚实的石砌教堂在此矗立，村落便以“上帝的教堂”为名，在历史记载中正式登场。它从罗马的军事交通节点，悄然转变为中世纪的精神与社区中心，完成了第一次深刻的身份蜕变。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "迪基希的历史肌理，由三枚深刻的印记构成。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一枚印记，来自地下。<strong>1980年</strong>，一次普通的市政施工，却凿开了沉睡千年的时光。工人们在地下室发现了保存完好的<strong>罗马马赛克地板</strong>，其精美程度在大公国内首屈一指。这幅马赛克描绘着酒神狄俄尼索斯的狂欢场景，葡萄藤蔓缠绕，神祇与精灵共舞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它并非孤立遗迹，而是庞大罗马庄园的一部分。这一发现震撼学界，直接将迪基希确认为卢森堡境内<strong>最古老、最重要的罗马定居点之一</strong>。如今，这幅国宝被精心保存在“迪基希历史与罗马博物馆”中，成为小城编年史无可争议的起点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二枚印记，弥漫着酒花香。<strong>19世纪中叶</strong>，工业革命的浪潮席卷卢森堡。迪基希凭借优质的阿勒河水源与农业腹地，迎来了命运的转折点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1871年</strong>，<strong>国家啤酒厂</strong>在此创立。这并非普通的商业投资，它几乎是卢森堡现代啤酒工业的“原爆点”。酒厂生产的“迪基希啤酒”迅速风靡，其标志性的“迪基希祖父”形象深入人心。啤酒厂不仅提供了就业，更将迪基希的名字与“国民酿造”画上等号，赋予了它全新的、充满活力的经济身份。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三枚印记，则是冰冷的钢铁与炙热的鲜血。<strong>1944年至1945年</strong>的冬天，迪基希从宁静河谷沦为阿登战役（突出部战役）的惨烈战场。德军在此强渡阿勒河，与美军爆发激烈巷战。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小城的街道、房屋、教堂都成了堡垒与废墟。<strong>1945年1月18日</strong>，美军最终解放迪基希，但城市已满目疮痍。这场战役的详细历程与沉重代价，被<strong>国家军事历史博物馆</strong>（前身为迪基希历史博物馆）巨细靡遗地记录和展示。坦克残骸、士兵日记、居民回忆，共同构成了关于战争残酷与和平珍贵的、无法磨灭的集体记忆。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "迪基希的传奇，不仅由宏大事件书写，更与两位人物的命运紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位，是城市的灵魂设计师与“养父”——<strong>让·巴蒂斯特·诺特邦</strong>。他并非出生于迪基希，却在<strong>19世纪下半叶</strong>作为市长与议员，以非凡远见塑造了现代迪基希的雏形。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "诺特邦深刻意识到交通即是命脉。他力排众议，积极推动铁路建设。<strong>1873年</strong>，迪基希终于接通了铁路网络，这如同为城市注入了强心剂。啤酒厂的产品得以快速运往全国，本地工业与商业被彻底激活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的市政管理充满人文关怀。他主导建立了新的学校、扩建了医院系统，并大力改善公共基础设施。更为人称道的是，他是一位狂热的考古与历史爱好者。在任期间，他系统地收集和保护了大量本地罗马时期与中世纪的文物，为后来博物馆的建立奠定了基石。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在他的私人笔记中曾写道：“一座城市的尊严，不仅在于它的繁荣，更在于它对自己根源的珍视与传承。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "可以说，没有诺特邦，迪基希可能只是一个普通的农业集镇。是他，亲手将这座小城推入了工业时代，同时又为其古老的历史魂魄找到了安放之所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位人物，则与城市的伤痛与治愈相关——<strong>爱德华·安德烈将军</strong>。他是卢森堡本土出生的最高阶军官之一，二战期间流亡英国，指挥卢森堡志愿军团。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但让他与迪基希紧紧绑定的，是<strong>1945年</strong>那个寒冷的春天。作为盟军指挥官之一，他率部参与了解放卢森堡北部的最后战役，并亲眼见证了家乡土地的满目疮痍。战争结束后，安德烈将军没有留在权力中心，而是积极投身于迪基希等北部城镇的重建工作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他利用自己的影响力，为流离失所的居民争取援助，协助清理废墟，并极力呼吁保留战争遗址作为教育后代的场所。正是得益于他和他人的努力，迪基希后来才能建立起如此详实而深刻的军事历史博物馆。他不仅是<strong>解放者</strong>，更是<strong>抚慰者</strong>与<strong>记忆的守护者</strong>。在迪基希，他的名字代表着从毁灭到重生的坚韧力量。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "迪基希的民间记忆，与一股清泉和一座雕像息息相关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老城中心，有一处名为“<strong>三跃泉</strong>”的古泉。关于它，有一个悲壮而浪漫的传说。中世纪时，一位名叫<strong>博托</strong>的本地骑士，深深爱上了一位姑娘。然而，命运弄人，他必须远赴圣地参加十字军东征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "临行前，他与爱人在此泉边告别。骑士发誓，无论经历多少险阻，一定会回到她的身边。他策马离去，三次回望泉水与爱人的身影。漫长的岁月过去，战争结束，九死一生的博托骑士终于归来。他欣喜若狂地奔回泉边，却发现爱人早已在无尽的等待中香消玉殒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "心碎的骑士在泉边久久伫立，最后投泉殉情。从此，这眼泉水便被称作“三跃泉”，象征着至死不渝的爱与永恒的乡愁。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "传说中，在寂静的午夜，有时还能听到战马的轻嘶与骑士的叹息，回荡在泉石之间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说如此深入人心，以至于它化作了城市的象征。你会发现，迪基希著名的<strong>“迪基希驴”</strong>雕像，其底座常常与喷泉设计结合在一起。那头憨态可掬、驮着酒桶的铜驴，不仅是啤酒文化的代表，在当地人心中，它也默默地守护着这股承载着爱情传说的泉水。传说与象征就这样奇妙地融合，构成了小城独特而温柔的情感地标。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日漫步迪基希，你会感受到一种罕见的“历史层次感”。脚下可能踩着罗马别墅的遗迹，眼前是挂着19世纪招牌的古老酒馆，而转角处，庄严的军事博物馆又提醒着你不久前的伤痛。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有巴黎的恢弘，也没有布拉格的炫目。它的魅力在于<strong>完整性</strong>和<strong>沉淀感</strong>。从罗马前哨到信仰中心，从工业重镇到战役焦点，迪基希像一本保存完好的、页码连贯的欧洲小镇自传。每一章都真实可触，未曾被过度粉饰或商业涂改。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂迪基希，便是读懂一个欧洲普通城镇如何承载历史洪流——接纳机遇，承受创伤，并在记忆与前行中找到平衡。它的酒中，有阿勒河水的清冽，也有历史复杂的回甘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/wasserbillig" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓦瑟比利希</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Wasserbillig</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mondorf-les-bains-thermal-park" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒙多夫莱班</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mondorf-les-Bains</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/berdorf" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝尔多夫（米勒塔尔“小瑞士”的中心）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Berdorf</p>
                  </div>
                </div>
              </a>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
