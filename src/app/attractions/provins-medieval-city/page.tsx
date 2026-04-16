import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '普罗万中世纪古城 Provins｜活着的13世纪，时光凝固的香槟集市故地 - 最佳欧洲景点',
  description: '当你从现代小镇的街道拐过弯，第一眼望见那扇巨大的圣让门和后面绵延的、带有锥形屋顶的灰色石墙时，时间真的会“嗡”地一声慢下来。空气的味道都变了，不再是汽车尾气的轻微刺鼻，而是混合了古老石头在阳光下散发的微凉土腥气、远处花园飘来的迷迭香，还有一丝若有若无的、从面包房飘出的黄油香。这就是普罗万给你的初印象...',
}

export default function ProvinsMedievalCityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '普罗万中世纪古城', href: '/attractions/provins-medieval-city' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">普罗万中世纪古城・Provins・法国・普罗万</h1>
          <p className="text-lg text-gray-600 mb-6">
            当你从现代小镇的街道拐过弯，第一眼望见那扇巨大的圣让门和后面绵延的、带有锥形屋顶的灰色石墙时，时间真的会“嗡”地一声慢下来。空气的味道都变了，不再是汽车尾气的轻微刺鼻，而是混合了古老石头在阳光下散发的微凉土腥气、远处花园飘来的迷迭香，还有一丝若有若无的、从面包房飘出的黄油香。这就是普罗万给你的初印象——不是一座被精心供奉起来的遗址，而是一个活生生的、只不过恰好穿着13世纪外衣的城镇。
穿过城门洞，脚下的石板路被数百年的脚步磨得中心发亮，略带凹凸。你的视线会被立刻引向上城所在的山丘，那里矗立着敦实的凯撒塔，像一位沉默的哨兵。但别急着上山。先在磨坊广场停下来，听听声音。不是游客的喧哗，而是铁匠铺里传来有节奏的叮当声，是咖啡馆露天座瓷器碰撞的轻响，是某个敞着门的 workshop 里，工匠用古法揉制皮革的窸窣声。当地人推着自行车从你身边经过，主妇提着菜篮，孩子们在城墙根下追逐。你会瞬间明白，这些城墙守护的不是一段死去的过去，而是一种延续至今的、从容不迫的生活节奏。
爬到上城，站在空旷的圣基利亚斯教堂前广场，风毫无阻挡地吹过。此刻，历史的宏大感才真正扑面而来。想象一下，13世纪，就是在这里，来自佛兰德斯的呢绒、意大利的丝绸、东方的香料、香槟地区的葡萄酒在此交易，人声鼎沸，货币叮当，各种语言交织。那些你走过的狭窄街道，曾挤满了商人、骑士、僧侣和艺人。而今天，这份喧嚣沉淀为了深沉的宁静，只留下石头替你诉说。最打动人的是那份“完整感”——你看到的不是孤零零的一座塔或一截墙，而是一整个被时间胶囊封存起来的世界，从防御工事、市集广场、教堂、粮仓到民居，系统性地呈现在你面前。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">当你从现代小镇的街道拐过弯，第一眼望见那扇巨大的圣让门和后面绵延的、带有锥形屋顶的灰色石墙时，时间真的会“嗡”地一声慢下来。空气的味道都变了，不再是汽车尾气的轻微刺鼻，而是混合了古老石头在阳光下散发的微凉土腥气、远处花园飘来的迷迭香，还有一丝若有若无的、从面包房飘出的黄油香。这就是普罗万给你的初印象——不是一座被精心供奉起来的遗址，而是一个活生生的、只不过恰好穿着13世纪外衣的城镇。</p>
              <p className="text-gray-700 leading-relaxed mb-4">穿过城门洞，脚下的石板路被数百年的脚步磨得中心发亮，略带凹凸。你的视线会被立刻引向上城所在的山丘，那里矗立着敦实的凯撒塔，像一位沉默的哨兵。但别急着上山。先在磨坊广场停下来，听听声音。不是游客的喧哗，而是铁匠铺里传来有节奏的叮当声，是咖啡馆露天座瓷器碰撞的轻响，是某个敞着门的 workshop 里，工匠用古法揉制皮革的窸窣声。当地人推着自行车从你身边经过，主妇提着菜篮，孩子们在城墙根下追逐。你会瞬间明白，这些城墙守护的不是一段死去的过去，而是一种延续至今的、从容不迫的生活节奏。</p>
              <p className="text-gray-700 leading-relaxed mb-4">爬到上城，站在空旷的圣基利亚斯教堂前广场，风毫无阻挡地吹过。此刻，历史的宏大感才真正扑面而来。想象一下，13世纪，就是在这里，来自佛兰德斯的呢绒、意大利的丝绸、东方的香料、香槟地区的葡萄酒在此交易，人声鼎沸，货币叮当，各种语言交织。那些你走过的狭窄街道，曾挤满了商人、骑士、僧侣和艺人。而今天，这份喧嚣沉淀为了深沉的宁静，只留下石头替你诉说。最打动人的是那份“完整感”——你看到的不是孤零零的一座塔或一截墙，而是一整个被时间胶囊封存起来的世界，从防御工事、市集广场、教堂、粮仓到民居，系统性地呈现在你面前。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="普罗万中世纪古城" />
                <InfoRow label="英文名称" value="Provins" />
                <InfoRow label="正式名称" value="Provins Medieval City" />
                <InfoRow label="国家" value="法国" />
                <InfoRow label="城市" value="普罗万" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="欧洲中世纪香槟集市鼎盛时期最繁荣、保存最完好的城镇之一，是见证西欧商业复兴的活化石。" />
                <InfoRow label="建筑特色" value="完整保留了13世纪的城市防御体系、民用建筑与地下网络，其环绕上城的3.5公里城墙和标志性的凯撒塔尤为震撼。" />
                <InfoRow label="建筑风格" value="以中世纪哥特式民用与军事建筑为主，兼有部分罗马式遗存，朴实厚重，功能性强。" />
                <InfoRow label="文化价值" value="一座仍在呼吸的露天博物馆，不仅展示了建筑，更延续了中世纪的手工艺、节庆与传统，是理解法国中世纪市民生活的绝佳样本。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城本身全天开放，但主要景点（如凯撒塔、城墙、地下隧道等）有独立开放时间。凯撒塔与城墙步道：每年4月至9月，上午10点至下午6点半；10月至次年3月，上午10点至下午5点（周二及部分节假日关闭）。圣基利亚斯教堂：通常为上午9点至下午6点。地下隧道：仅限导览游，每日有固定场次，旺季需提前预订。具体时间随季节略有调整，建议行前查阅官网。每年六月的“中世纪节”期间，全城延长开放并举办大量活动。" />
              <InfoRow label="门票价格" value="有多种联票选择。“通行证”联票（包括凯撒塔、城墙步道、地下隧道导览、提图斯之屋等主要景点）成人价为13.5欧元。单景点门票：凯撒塔成人价4.7欧元。优惠票价适用于学生、儿童及家庭。持有巴黎博物馆通票可免费进入部分景点。中世纪节期间入城免费，但参与特定活动和进入景点需额外购票。" />
              <InfoRow label="地址" value="Provins, 77160, France" />
              <InfoRow label="交通方式" value="从巴黎出发最为便捷。在巴黎东站（Gare de l‘Est）乘坐开往普罗万（Provins）的P线郊区火车（Transilien），车程约1小时20分钟。工作日班次约每小时1-2班，周末班次减少，务必提前在车站的Transilien售票机或SNCF App上查好时刻表。抵达普罗万站后，出站步行约15-20分钟即可到达古城脚下的圣让门，这是开启旅程的完美起点。不建议自驾进入古城核心区，可将车停在城门外的付费停车场。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">要讲普罗万的故事，得从一个名字开始：香槟伯爵。在10到13世纪，这些精明且有远见的领主，成功地将自己位于法国东北部的领地，变成了连接北欧与地中海贸易的十字路口。他们建立了一套完善的市场法则、货币兑换体系和安全保障，吸引全欧洲的商人。而普罗万，凭借其易守难攻的山丘地形和通往巴黎的要道位置，成为了香槟集市链条上最璀璨的明珠之一。每年，这里都会举办两次长达数周的盛大集市，城市的命运与集市的钟声紧密相连。</p>
              <p className="text-gray-700 leading-relaxed mb-4">鼎盛时期的普罗万，富可敌国。财富首先被投入了防御。我们今天看到的近3.5公里长、带着22座巍峨塔楼的石砌城墙，大部分建于13世纪初，是当时最先进的军事工程之一。它不仅仅是一堵墙，更是一个宣言，向世界展示这座城市的实力与独立。城内的民用建筑也空前繁荣，商人修建了带有巨大底层仓库的“提图斯之屋”，行业协会拥有了自己的集会所。更神秘的是地下——人们挖掘了纵横交错的隧道网络，最初为了开采用于建筑的白色粘土，后来成为存储货物、乃至危急时刻的秘密通道，构成了一个鲜为人知的地下城市。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然而，所有的繁荣都难以永恒。13世纪末，随着海上贸易路线的兴起和法国王室中央集权的加强，香槟伯爵的自治权被削弱，香槟集市逐渐衰落。更大的打击来自战争。在漫长的英法百年战争（1337-1453）中，普罗万因其战略位置多次被围困、占领。战火虽未彻底摧毁它的城墙，却掏空了它的经济命脉。随后的宗教战争、瘟疫，更是让这座城市陷入了长达数个世纪的沉睡。它就像一位辉煌过后退隐乡间的贵族，被世界慢慢遗忘，但也正因这份“遗忘”，它的中世纪肌理才避免了被大规模现代化改造的命运。</p>
              <p className="text-gray-700 leading-relaxed mb-4">转机出现在现代。当人们开始珍视历史遗产，普罗万这座“沉睡的美人”终于被重新发现。它的价值不在于某一件旷世杰作，而在于无与伦比的整体性。1995年，它以“中世纪集市城镇”的名义，被整体列入联合国教科文组织世界遗产名录。这顶桂冠带来了保护与复兴。如今，城里许多老建筑被精心修复，重新赋予了生命——也许是艺术家的工作室，也许是家庭经营的民宿。而每年六月声势浩大的“中世纪节”，更是一场全民的时空穿越，骑士比武、古市集、街头戏剧……那一刻，你会觉得，钟楼的指针仿佛从未真正移动过。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  想要完整感受普罗万的灵魂，我强烈建议你安排整整一天，并尽可能在非周末的清晨抵达。这样，你能在游客大军到来前，独占古城苏醒时的那份清寂与神圣感。整体路线可以设计为“由外而内，自下而上，再深入地下”的循环。上午精力充沛时，先攀爬凯撒塔、漫步城墙，从制高点建立对古城格局的宏观认识；中午在广场或某条小巷找家餐馆，像当地人一样吃个午饭；下午则深入探索地下隧道的神秘世界和圣基利亚斯教堂的宁静，最后在手工艺街区闲逛，让节奏慢下来。这样的安排张弛有度，既能覆盖精华，又留有发呆和邂逅惊喜的空间。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>地下隧道导览游非常热门，且有人数限制，务必提前在官网或游客中心预订，现场很可能扑空。穿一双绝对舒适、防滑的鞋，因为古城里全是凹凸不平的石板路，隧道和塔楼阶梯也又陡又滑。如果遇到六月的中世纪节，请做好人山人海的心理准备，但同时也是体验古城“复活”魔力的最佳时机。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">清晨从圣让门进入，顺着磨坊广场斜坡向上，感受第一缕阳光把凯撒塔的塔身染成金色的神圣时刻。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">推开凯撒塔厚重的木门，沿着狭窄的螺旋石阶一口气爬上顶层，在猎猎风声中360度俯瞰整个普罗万屋顶的海洋和远处绵延的田野。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从塔楼出来，直接踏上与之相连的城墙步道，假装自己是一名中世纪的哨兵，走着走着，你会看到当地人把自家花园打理到了城墙根下。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">参加一场必须提前预约的地下隧道导览游，在导游提着的煤油灯摇曳的光芒下，弯腰穿过低矮的通道，触摸墙壁上几个世纪前矿工留下的镐痕。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">走进空旷阴凉的圣基利亚斯教堂，坐在长椅上，让你的眼睛适应昏暗，然后静静欣赏那些虽不华丽却异常动人的13世纪彩绘玻璃碎片。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在下城的“手工艺者街”徘徊，推开一扇虚掩的门，可能就会看到正在用古法制作羊皮纸或雕刻木勺的匠人，空气中弥漫着木头和蜂蜡的香气。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">傍晚时分，绕到城墙外的一条小径上散步，从远处回望这座被夕阳勾勒出金色轮廓的山丘之城，看灯火在石窗里一一点亮。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 磨坊广场仰拍凯撒塔</h4>
                  <p className="text-sm text-gray-700">上午十点前，阳光从东南方洒来，站在广场喷泉附近，用广角镜头将前景的石板路、中景的古老房屋和背景巍峨的塔楼一同纳入，构图充满纵深感和故事性。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 城墙步道西段全景</h4>
                  <p className="text-sm text-gray-700">傍晚日落前一小时，沿着西侧城墙行走，找到一个垛口，将镜头对准下城的红色屋顶群和远方无际的田野，温暖的侧光会让屋顶的纹理和层次感极度丰富。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 地下隧道入口的光影</h4>
                  <p className="text-sm text-gray-700">参加导览时，在入口处等待，当一队游客手持蜡烛或 LED 灯深入黑暗的隧道时，从后方抓拍，能捕捉到人影憧憧、光线勾勒出古老拱顶的神秘氛围。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 圣基利亚斯教堂彩窗特写</h4>
                  <p className="text-sm text-gray-700">选择一个阳光明媚的下午，走进教堂，找到一扇保存较好的彩绘玻璃窗，等待阳光以较低角度穿透玻璃，在地面或墙壁上投射出斑斓的光影，拍摄细节或抽象的光影图案。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 古城外玫瑰园视角</h4>
                  <p className="text-sm text-gray-700">位于上城东南方向的玫瑰园（普罗万也以古老玫瑰品种闻名），不仅是休息的好去处，更是拍摄古城天际线的绝佳地点，尤其以盛开的玫瑰花作为前景，衬托远处的凯撒塔与城墙。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 古城建筑多为石材，在正午阳光下容易反差过大，建议利用清晨和黄昏的“黄金时刻”拍摄，色彩和质感最佳。教堂内部通常允许拍照，但务必关闭闪光灯和快门声音，保持绝对的安静与尊重。许多小巷和民居外观极具魅力，拍摄时请注意隐私，避免将镜头直接对准住户的窗户或私人庭院。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">预算之选</h4>
                  <p className="text-sm text-blue-800">住在圣让城门外的家庭式民宿，主人通常是热情的老普罗万人，早晨会为你准备地道的法式早餐，并分享许多旅游指南上找不到的古城秘闻。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">特色体验</h4>
                  <p className="text-sm text-green-800">入住上城一栋由13世纪贵族宅邸改造的精品小酒店，房间保留了原始的石头墙壁和粗大的木梁，晚上壁炉里生起火，让你彻底沉浸在中世纪的夜晚氛围里。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">高端享受</h4>
                  <p className="text-sm text-yellow-800">选择坐落在古城几公里外、被葡萄园和森林环绕的18世纪庄园城堡酒店，享受绝对的宁静与奢华，在日落时分啜饮一杯当地香槟，远眺灯火初上的普罗万山丘。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">隐居之所</h4>
                  <p className="text-sm text-purple-800">租住下城一栋带有私人小花园的石砌老屋，自己从市集买来食材做饭，像本地人一样生活几天，夜晚听着城墙外的虫鸣入睡。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">古城内的住宿数量有限，且多为老房子，隔音可能一般，也没有电梯，但体验无与伦比，旺季（特别是中世纪节期间）需提前数月预订。住在城外则更安静、现代化设施更好，且有免费停车优势。无论住在哪里，普罗万的夜晚都非常安全宁静，可以放心地饭后散步。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开普罗万许久后，我发现自己最怀念的，不是某一张明信片般的风景，而是一种“触感”。是手指划过城墙粗糙石面时的微凉，是坐在阳光晒暖的广场石阶上发呆的慵懒，是地下隧道里那种带着土味的潮湿空气。这座城市没有用玻璃罩把历史供起来，而是让你走进历史，住在历史里，和历史一起呼吸。它告诉你，中世纪不是一段黑暗、遥远的蒙昧时期，而是一个有着繁荣商业、复杂社会、高超工艺和生动烟火气的鲜活时代。</p>
              <p className="text-gray-700 leading-relaxed mb-4">在这个一切都追求快速迭代、高度同质化的世界里，普罗万像一颗固执的、拒绝了校准的时钟。它以自己的节奏嘀嗒作响，提醒着我们，有一种价值叫做“延续”，有一种美来自于“完整”。它不仅仅是一个旅游目的地，更是一堂关于时间、记忆与文明的沉浸式课程。对于每一位不满足于走马观花，渴望触摸历史真实纹理，渴望在一座城市里同时看见它的过去与现在的旅人来说，普罗万都是一个不容错过的心灵驿站。来这里，花一天时间，让自己迷路在13世纪的街巷，你会带走比照片丰富得多的东西——一段被石头和玫瑰共同封存的、宁静而丰盈的时光。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
