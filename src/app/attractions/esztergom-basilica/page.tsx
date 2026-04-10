import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃斯泰尔戈姆大教堂・Esztergom Basilica・匈牙利・埃斯泰尔戈姆 | 最佳欧洲景点',
  description: '探索埃斯泰尔戈姆大教堂，匈牙利规模最大、级别最高的天主教堂，欧洲第二大圣母升天大教堂，承载着深厚宗教与历史底蕴的中欧建筑艺术瑰宝。',
}

export default function EsztergomBasilicaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '埃斯泰尔戈姆大教堂', href: '/attractions/esztergom-basilica' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">埃斯泰尔戈姆大教堂・Esztergom Basilica・匈牙利・埃斯泰尔戈姆</h1>
          <p className="text-lg text-gray-600 mb-6">
            埃斯泰尔戈姆大教堂是匈牙利规模最大、级别最高的天主教堂，也是欧洲第二大圣母升天大教堂，作为匈牙利天主教的中心，承载着深厚的宗教与历史底蕴。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              埃斯泰尔戈姆大教堂是匈牙利规模最大、级别最高的天主教堂，也是欧洲第二大圣母升天大教堂，作为匈牙利天主教的中心，承载着深厚的宗教与历史底蕴。教堂融合新古典主义与巴洛克风格，外观宏伟庄重，内部装饰精美，留存着众多艺术珍品，与多瑙河对岸的斯洛伐克城镇隔河相望，既是宗教朝圣的圣地，也是欣赏中欧建筑艺术、感受匈牙利历史文化的必访景点。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="埃斯泰尔戈姆大教堂" />
                <InfoRow label="英文名称" value="Esztergom Basilica" />
                <InfoRow label="全称" value="Basilica of Esztergom" />
                <InfoRow label="匈牙利语名" value="Esztergomi Bazilika" />
                <InfoRow label="国家" value="匈牙利（Hungary）" />
                <InfoRow label="城市" value="埃斯泰尔戈姆（Esztergom）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="所属区域" value="匈牙利北部，科马罗姆-埃斯泰尔戈姆州首府" />
                <InfoRow label="地理位置" value="多瑙河畔，紧邻斯洛伐克边境" />
                <InfoRow label="历史地位" value="匈牙利旧都、天主教大主教驻地" />
                <InfoRow label="建筑风格" value="新古典主义与巴洛克风格融合" />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">详细门票信息</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">教堂主体（含主祭坛、穹顶）：</span>成人8欧元/人，学生4欧元/人，6岁以下儿童免费</p>
                <p><span className="font-medium">教堂博物馆（含宗教文物、艺术珍品）：</span>成人5欧元/人，学生3欧元/人</p>
                <p><span className="font-medium">穹顶登顶（俯瞰城市与多瑙河全景）：</span>成人3欧元/人，学生2欧元/人</p>
                <p><span className="font-medium">联票（教堂主体+博物馆+穹顶）：</span>成人14欧元/人，学生7欧元/人</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">开放时间</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">4-5月：</span>9:00-17:00（16:30停止入园）</p>
                <p><span className="font-medium">6-8月：</span>8:30-18:30（18:00停止入园）</p>
                <p><span className="font-medium">9-10月：</span>9:00-17:00（16:30停止入园）</p>
                <p><span className="font-medium">11月-次年3月：</span>10:00-16:00（15:30停止入园）</p>
                <p className="text-red-600 font-medium">注意：周一部分区域闭馆</p>
              </div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-yellow-900 mb-3">交通指南</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">布达佩斯机场：</span>→埃斯泰尔戈姆（1小时车程）</p>
                <p><span className="font-medium">公共交通：</span>布达佩斯→埃斯泰尔戈姆（1小时火车，4.5欧元/人）</p>
                <p><span className="font-medium">火车站距离：</span>火车站距教堂约1.2公里，步行15分钟</p>
                <p><span className="font-medium">市内交通：</span>老城区步行游览，巴士可达核心节点（1.2欧元/人）</p>
                <p><span className="font-medium">停车场：</span>教堂周边专用停车场，收费约4欧元/天</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              埃斯泰尔戈姆大教堂的历史与埃斯泰尔戈姆市的兴衰紧密相连，这座教堂的发展历程，见证了匈牙利宗教文化的传承与历史的变迁，承载着千年的王室与宗教记忆，是匈牙利历史文化的重要缩影。埃斯泰尔戈姆作为匈牙利的旧都，曾是阿尔帕德王朝的首都，也是匈牙利王室的重要居所，而埃斯泰尔戈姆大教堂则是这一历史地位的重要象征。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              早在10世纪，埃斯泰尔戈姆就成为匈牙利的宗教中心，当时这里建造了第一座基督教教堂，作为匈牙利早期天主教的重要圣地。匈牙利首位国王伊什特万一世（圣伊什特万）就诞生于埃斯泰尔戈姆，他在位期间，大力推行基督教，将天主教确立为匈牙利国教，埃斯泰尔戈姆也成为匈牙利大主教的驻地，当时的教堂成为王室加冕、祈祷的重要场所，见证了匈牙利早期的统一与繁荣。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              中世纪时期，埃斯泰尔戈姆大教堂历经多次改建与扩建，最初为罗马式风格，后逐步融合哥特式元素，成为当时匈牙利规模最大、最华丽的教堂之一。但在16世纪奥斯曼帝国入侵匈牙利期间，教堂遭到严重破坏，大部分建筑被损毁，宗教活动一度中断，教堂沦为奥斯曼军队的驻扎地，许多宗教文物被掠夺、损毁，昔日的辉煌逐渐衰落。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              17世纪末，匈牙利摆脱奥斯曼帝国的统治，开始重建埃斯泰尔戈姆大教堂，历经数十年的修复，教堂逐步恢复原貌，但规模与装饰仍未达到昔日水平。1822年，匈牙利王室决定重建大教堂，邀请当时著名的建筑师希尔德·约瑟夫主持设计，采用新古典主义风格，融合部分巴洛克元素，历时47年，于1869年正式竣工，成为如今我们看到的埃斯泰尔戈姆大教堂。这座教堂的竣工，不仅恢复了埃斯泰尔戈姆作为宗教中心的地位，也成为匈牙利民族复兴的象征。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              1856年，埃斯泰尔戈姆大教堂举行了隆重的献堂典礼，著名音乐家李斯特·费伦茨专门为此谱写了《大弥撒曲》作为献礼，并亲自担任献堂弥撒的音乐指挥，这一事件也成为埃斯泰尔戈姆大教堂历史上的重要里程碑。此后，大教堂历经多次修缮，尤其是20世纪末的全面修复，不仅保留了原有建筑的风貌，还完善了内部的艺术装饰，留存了大量的壁画、雕塑、stained glass（彩色玻璃）等艺术珍品，成为匈牙利宗教艺术的集大成者。
            </p>
            <p className="text-gray-700 leading-relaxed">
              如今，埃斯泰尔戈姆大教堂不仅是匈牙利天主教的中心，也是匈牙利重要的历史文化地标，每年吸引着大量游客与朝圣者前来，它承载着匈牙利千年的宗教信仰与历史记忆，见证了匈牙利从分裂到统一、从衰落至复兴的全过程，成为中欧宗教建筑与历史文化融合的典范。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典游览路线</h4>
                <p className="text-gray-700 mb-4">全程以"宗教艺术+历史人文"为主题，难度适中，建议安排1.5-2小时</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">起点：埃斯泰尔戈姆大教堂入口</h5>
                    <p>设有售票窗口与游客中心，可购买门票、领取导览手册、寄存行李</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第一站：教堂前广场</h5>
                    <p>广场中央有圣伊什特万雕像，周边是新古典主义风格附属建筑，可拍摄教堂正面全景，参观约15分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第二站：教堂主体大厅</h5>
                    <p>首先映入眼帘的是宏伟的主祭坛，祭坛上方是巨大的穹顶，穹顶壁画精美，两侧是对称的侧祭坛，参观约40分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第三站：教堂博物馆</h5>
                    <p>位于教堂西侧，展示了大量宗教文物、中世纪手稿、雕塑、绘画等珍品，参观约25分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第四站：穹顶登顶</h5>
                    <p>乘坐电梯或步行登上穹顶，可360度俯瞰埃斯泰尔戈姆市区全景，远眺多瑙河对岸的斯洛伐克城镇，参观约20分钟</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第五站：教堂周边街巷漫步</h5>
                    <p>漫步在老城区的石板街巷，欣赏两侧的复古民居、特色商铺与咖啡馆，购买当地手工艺品，感受当地烟火气</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">终点：教堂入口</h5>
                    <p>周边有当地特色餐厅，可品尝匈牙利传统美食，结束游览</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">温馨提示</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 参观教堂时，需保持安静，禁止大声喧哗，穿着需得体，避免短裤、短裙、背心等过于随意的服装</li>
                  <li>• 教堂内部部分区域禁止拍照或需关闭闪光灯，需遵守现场提示</li>
                  <li>• 穹顶登顶的楼梯部分较陡，步行登顶需注意安全，老人与小孩建议乘坐电梯</li>
                  <li>• 周一教堂博物馆闭馆，仅开放教堂主体与穹顶区域，前往前需提前确认</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">教堂前广场圣伊什特万雕像旁</h4>
                  <p className="text-gray-700 text-sm">拍摄教堂正面全景最佳机位，可完整拍摄大教堂正面轮廓，新古典主义风格立柱、高耸穹顶、精致雕塑清晰可见。最佳时间：上午10:00-11:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">教堂穹顶顶层露台</h4>
                  <p className="text-gray-700 text-sm">拍摄埃斯泰尔戈姆全景与多瑙河风光核心机位，登顶后可360度俯瞰整个城市，大教堂屋顶、老城区复古街巷、蜿蜒多瑙河尽收眼底。最佳时间：傍晚17:00-18:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">教堂内部主祭坛前</h4>
                  <p className="text-gray-700 text-sm">拍摄教堂内部宏伟感绝佳机位，可拍摄到穹顶全貌与主祭坛细节，穹顶壁画、彩色玻璃光影、祭坛雕塑相互映衬。最佳时间：上午10:00-11:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">多瑙河畔观景台</h4>
                  <p className="text-gray-700 text-sm">拍摄教堂与多瑙河同框最佳机位，大教堂宏伟建筑与蜿蜒多瑙河相互呼应，远处是斯洛伐克城镇轮廓。最佳时间：午后14:00-15:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">老城区石板街巷</h4>
                  <p className="text-gray-700 text-sm">拍摄人文烟火气与复古氛围绝佳机位，蜿蜒石板街巷、两侧复古民居、特色商铺与咖啡馆，搭配远处教堂穹顶。最佳时间：午后15:00-16:00</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">拍照小贴士</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 最佳拍摄时间为清晨（9:30-11:30）和傍晚（17:00-18:00），光线柔和，光影层次丰富，且游客较少</li>
                  <li>• 建议穿着简约大气的衣物，如黑色、米白色、卡其色，避免过于花哨，与教堂庄重氛围形成呼应</li>
                  <li>• 拍摄建筑全景时可使用广角镜头，展现建筑宏伟与布局，拍摄细节时可使用长焦镜头，突出壁画、雕塑等细节</li>
                  <li>• 参观教堂内部时，需遵守相关规定，禁止拍照的区域切勿拍摄</li>
                  <li>• 拍摄多瑙河与教堂同框时，可利用河流的线条，增强画面的纵深感</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">步行可达景点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">埃斯泰尔戈姆城堡遗址</span>
                      <p className="text-sm text-gray-600">距大教堂约800米，步行12分钟。中世纪时期埃斯泰尔戈姆王室居所，保留城堡残垣断壁、城墙与塔楼，免费开放</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">多瑙河游船码头</span>
                      <p className="text-sm text-gray-600">距大教堂约600米，步行10分钟。可乘坐游船游览多瑙河，欣赏两岸风光，远眺斯洛伐克布拉迪斯拉发城堡</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">圣安娜教堂</span>
                      <p className="text-sm text-gray-600">距大教堂约1公里，步行15分钟。建于15世纪，哥特式建筑代表，外观精致，内部保留中世纪壁画与雕塑</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">埃斯泰尔戈姆历史博物馆</span>
                      <p className="text-sm text-gray-600">距大教堂约700米，步行10分钟。展示埃斯泰尔戈姆市历史变迁、王室文物与民俗文化，门票约4欧元/人</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">跨境游览景点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">布拉迪斯拉发城堡（斯洛伐克）</span>
                      <p className="text-sm text-gray-600">距埃斯泰尔戈姆约10公里，自驾20分钟或游船前往。斯洛伐克标志性景点，建于9世纪，融合哥特式、巴洛克式等多种建筑风格</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿推荐">
            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">住宿位置选择</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">大教堂周边或老城区内</h5>
                    <p>距离核心景点最近，步行即可抵达，多为复古民居改造住宿，氛围古朴典雅，可深度感受中世纪风情</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">多瑙河畔</h5>
                    <p>风景优美，可欣赏河景，适合喜欢自然风光、想享受宁静氛围游客，距大教堂约500-800米，步行10-15分钟</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">市区周边</h5>
                    <p>住宿性价比高，价格相对实惠，距老城区约2公里，可乘坐公交或打车前往，适合预算有限游客</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">住宿类型推荐</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">特色民宿</h5>
                    <p>老城区内有很多小众民宿，多由当地传统复古民居改造，装修融合中欧风格与宗教元素，30-75欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">自助公寓</h5>
                    <p>设施齐全，适合家庭或多人出行，28-65欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">精品酒店</h5>
                    <p>大教堂周边与多瑙河畔有多家精品酒店，装修高端精致，部分酒店具有历史底蕴，提供早餐服务，70-130欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">经济型酒店</h5>
                    <p>市区周边有多家性价比高的酒店，设施标准化，干净整洁，提供基础住宿服务，22-40欧元/晚</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">预订注意事项</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 埃斯泰尔戈姆旅游旺季为5-9月，尤其是7-8月，游客较多，建议提前1-2个月预订</li>
                  <li>• 选择可免费取消的房源，以便灵活调整行程</li>
                  <li>• 自驾出行需确认住宿周边停车场位置与收费标准（2-5欧元/天）</li>
                  <li>• 老城区内民宿多位于石板街巷深处，部分无电梯，携带大件行李的游客可选择有行李搬运服务的住宿</li>
                  <li>• 春秋季（4-5月、9-10月）气候最宜人，游客较少，住宿价格适中，是最佳时节</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="8. 实用贴士">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">最佳游览时间</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 4-5月、9-10月：气候宜人，游客较少，住宿价格适中</li>
                    <li>• 5-9月：旅游旺季，活动丰富但游客较多</li>
                    <li>• 11-次年2月：旅游淡季，游客稀少，部分景点关闭</li>
                    <li>• 上午10:00-11:30：游客较少，光线柔和，便于拍摄</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">参观注意事项</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 参观教堂时，需保持安静，禁止大声喧哗，穿着需得体</li>
                    <li>• 教堂内部部分区域禁止拍照或需关闭闪光灯，需遵守现场提示</li>
                    <li>• 穹顶登顶的楼梯部分较陡，步行登顶需注意安全，老人与小孩建议乘坐电梯</li>
                    <li>• 周一教堂博物馆闭馆，仅开放教堂主体与穹顶区域，前往前需提前确认</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">特色体验</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 参观教堂主体大厅，欣赏宏伟的主祭坛与精美穹顶壁画</li>
                    <li>• 探索教堂博物馆，了解宗教文物与中世纪手稿</li>
                    <li>• 登顶穹顶露台，360度俯瞰埃斯泰尔戈姆市区与多瑙河风光</li>
                    <li>• 漫步多瑙河畔，感受教堂与河流交相辉映的美景</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">实用信息</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 当地货币：匈牙利福林（1欧元≈380匈牙利福林）</li>
                    <li>• 语言：匈牙利语，但旅游区英语基本通行</li>
                    <li>• 电压：230V，插头为Type F型</li>
                    <li>• 紧急电话：112（欧洲统一紧急电话）</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}