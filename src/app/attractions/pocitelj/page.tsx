import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '波契泰利城堡・Počitelj・波斯尼亚和黑塞哥维那・波契泰利 | 最佳欧洲景点',
  description: '探索波契泰利城堡，这座波斯尼亚和黑塞哥维那保存最完整的中世纪军事城堡，以厚重的石砌城墙和多元文化交融的历史闻名于世。',
}

export default function PociteljPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '波斯尼亚和黑塞哥维那', href: '/destinations/bosnia-and-herzegovina' },
            { label: '波契泰利', href: '/destinations/bosnia-and-herzegovina' },
            { label: '波契泰利城堡', href: '/attractions/pocitelj' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">波契泰利城堡・Počitelj・波斯尼亚和黑塞哥维那・波契泰利</h1>
          <p className="text-lg text-gray-600 mb-6">
            波契泰利城堡是波斯尼亚和黑塞哥维那中世纪军事建筑的典范，始建于14世纪，依山而建、傍水而居，整体采用石砌结构，占地约1.2万平方米，兼具军事防御与居住功能。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              波契泰利城堡是波斯尼亚和黑塞哥维那中世纪军事建筑的典范，始建于14世纪，依山而建、傍水而居，整体采用石砌结构，占地约1.2万平方米，兼具军事防御与居住功能。城堡依山势分层而建，从山脚到山顶依次分布着居民区、防御工事和主塔楼，错落有致、气势恢宏。这里留存着中世纪的城墙、塔楼、教堂、清真寺等建筑，融合了拜占庭、奥斯曼、斯拉夫等多种文化风格，既有军事城堡的庄严厚重，又有人文建筑的细腻韵味，是探寻波斯尼亚和黑塞哥维那历史、感受多元文化、欣赏河谷风光的绝佳去处。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="波契泰利城堡" />
                <InfoRow label="英文名称" value="Počitelj Fortress" />
                <InfoRow label="国家" value="波斯尼亚和黑塞哥维那" />
                <InfoRow label="城市" value="波契泰利（Počitelj）" />
                <InfoRow label="所属区域" value="波斯尼亚和黑塞哥维那黑塞哥维那地区南部" />
              </div>
              <div className="space-y-4">
                <InfoRow label="始建年代" value="14世纪" />
                <InfoRow label="占地面积" value="约1.2万平方米" />
                <InfoRow label="门票价格" value="免费开放" />
                <InfoRow label="建议游览" value="2-3小时" />
                <InfoRow label="距离莫斯塔尔" value="约30公里" />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">详细门票信息</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">城堡参观：</span>免费开放，无需购买门票</p>
                <p><span className="font-medium">导游讲解：</span>约20欧元/小时，提供英文、波斯尼亚语讲解</p>
                <p><span className="font-medium">文物陈列室：</span>单独付费，约5欧元/人，学生半价，12岁以下儿童免费</p>
                <p><span className="font-medium">支付方式：</span>支持现金支付，建议准备欧元或波斯尼亚和黑塞哥维那马克</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">交通指南</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">自驾：</span>萨拉热窝→波契泰利城堡（2.5小时，全程高速）</p>
                <p><span className="font-medium">公共交通：</span>萨拉热窝→莫斯塔尔（2小时，15欧元）→打车（30分钟，25-30欧元）</p>
                <p><span className="font-medium">市内交通：</span>波契泰利小镇步行至城堡入口约10分钟</p>
                <p><span className="font-medium">停车场：</span>城堡入口外专用停车场，收费约3欧元/天</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              波契泰利城堡的历史可追溯至14世纪，其诞生与巴尔干半岛的军事纷争、民族迁徙和文化交融紧密相关，历经数百年沧桑，见证了波斯尼亚和黑塞哥维那从中世纪到现代的变迁，承载着多元文化碰撞的印记，是波斯尼亚和黑塞哥维那历史文化的重要载体。城堡的建造最初源于军事防御需求，凭借内雷特瓦河沿岸的险峻地势，成为控制河谷交通要道的战略据点。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              14世纪初，塞尔维亚贵族拉扎尔·赫雷别利亚诺维奇为抵御奥斯曼帝国的入侵，下令修建波契泰利城堡，作为内雷特瓦河流域的重要防御工事，城堡依山而建，利用天然地形构建起坚固的防御体系，城墙高大厚重，设有多个瞭望塔和射击孔，可全方位监控河谷动向，抵御外敌入侵。建成初期，城堡仅作为军事据点，驻扎着少量军队，随着时间推移，逐渐形成了围绕城堡的居民区，成为当地居民的聚居地。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              15世纪中叶，奥斯曼帝国征服波斯尼亚和黑塞哥维那地区，波契泰利城堡被奥斯曼军队接管，成为奥斯曼帝国在巴尔干半岛南部的重要军事要塞。奥斯曼帝国对城堡进行了大规模修缮与扩建，在保留原有军事防御功能的基础上，新增了清真寺、浴室、集市等建筑，将奥斯曼文化元素融入城堡的建筑风格中，形成了"军事防御+人文居住"的复合格局。这一时期，城堡周边的居民区逐渐扩大，汇聚了塞尔维亚人、波斯尼亚人、克罗地亚人等多个民族，多元文化在此交融共生，形成了独特的地域文化。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              19世纪，随着奥斯曼帝国的衰落，波契泰利城堡逐渐失去军事防御功能，成为当地居民的普通聚居地，城堡的部分建筑因年久失修出现破损。20世纪初，波斯尼亚和黑塞哥维那成为南斯拉夫的一部分，南斯拉夫政府对波契泰利城堡进行了首次系统性修缮，重点修复了坍塌的城墙和塔楼，保留了其历史原貌。此后，城堡逐渐被外界熟知，成为波斯尼亚和黑塞哥维那重要的历史遗迹之一。
            </p>
            <p className="text-gray-700 leading-relaxed">
              20世纪90年代，波斯尼亚和黑塞哥维那战争爆发，波契泰利城堡遭到一定程度的破坏，部分城墙、塔楼和民居被损毁，大量文物遗失。战争结束后，在国际社会的援助下，波斯尼亚和黑塞哥维那政府启动了城堡修复工程，严格遵循"修旧如旧"的原则，修复破损的建筑，打捞遗失的文物，逐步恢复城堡的历史风貌。如今，波契泰利城堡不仅是波斯尼亚和黑塞哥维那重要的历史文化遗产，更是巴尔干半岛多元文化交融的见证，吸引着全球历史爱好者、建筑学者和游客前来探寻其背后的故事。如今，城堡内依然留存着中世纪的防御工事、奥斯曼风格的清真寺、斯拉夫式民居等建筑，行走在城堡的石板路上，既能感受到军事城堡的庄严厚重，又能领略到多元文化的独特魅力，每一处建筑、每一块石板，都镌刻着波契泰利的千年沧桑与变迁。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典步行游览路线</h4>
                <p className="text-gray-700 mb-4">全程约2-3小时，节奏舒缓，兼顾打卡与深度体验</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">起点：城堡入口</h5>
                    <p>设有城堡简介牌和历史地图，可领取导览手册，聘请当地导游了解历史变迁</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第一站：城堡外城墙（步行2分钟）</h5>
                    <p>高大厚重青灰色石块砌筑，留存中世纪射击孔和瞭望口，可远眺内雷特瓦河河谷风光</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第二站：老城区民居（步行3分钟）</h5>
                    <p>位于城堡中层，中世纪居民聚居地，街巷狭窄蜿蜒，两侧石砌红瓦民居，部分仍有人居住</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第三站：奥斯曼清真寺（步行5分钟）</h5>
                    <p>始建于16世纪，圆顶设计，白色外墙配蓝色装饰，内部留存古老壁画与经文雕刻</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第四站：防御塔楼（步行4分钟）</h5>
                    <p>重要防御设施，共3座塔楼呈三角形分布，高达15米，可登顶层俯瞰城堡全景</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第五站：主塔楼（步行3分钟）</h5>
                    <p>城堡核心建筑，始建于14世纪，登顶层可360度观赏周边风光，拍摄城堡全景绝佳位置</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第六站：历史文物陈列室（步行5分钟）</h5>
                    <p>陈列城堡出土文物，包括中世纪兵器、陶器、铭文石碑等，需单独付费参观</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">终点：城堡出口</h5>
                    <p>出口处有纪念品摊位，可购买当地手工艺品、明信片等，出口外便是波契泰利小镇</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">温馨提示</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 城堡内路面多为石板路和台阶，部分路段较滑，建议穿舒适的防滑步行鞋</li>
                  <li>• 夏季山区紫外线较强，需携带遮阳帽、防晒霜与饮用水</li>
                  <li>• 参观清真寺时，需尊重当地宗教习俗，脱鞋进入，女性需佩戴头巾</li>
                  <li>• 冬季山区气温较低，部分路段可能结冰，建议携带保暖衣物</li>
                  <li>• 城堡内禁止大声喧哗、随意触摸建筑与文物，禁止攀爬城墙与塔楼</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">城堡主塔楼顶层</h4>
                  <p className="text-gray-700 text-sm">拍摄城堡全景最佳机位，可360度俯瞰整个波契泰利城堡、老城区和内雷特瓦河河谷，画面恢弘大气。最佳时间：傍晚17:00-18:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">外城墙观景台</h4>
                  <p className="text-gray-700 text-sm">拍摄城堡侧面全景经典机位，可拍摄城墙高大厚重、防御塔楼挺拔身姿，背景是内雷特瓦河河谷风光。最佳时间：上午9:00-10:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">老城区街巷</h4>
                  <p className="text-gray-700 text-sm">拍摄复古人文风照片核心机位，狭窄石板路蜿蜒曲折，两侧石砌红瓦民居，充满中世纪韵味。最佳时间：上午10:30-11:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">奥斯曼清真寺门口</h4>
                  <p className="text-gray-700 text-sm">白色外墙、蓝色装饰与圆顶设计，极具奥斯曼文化特色，门口拱形门、雕花石柱细节精致。最佳时间：午后14:00-15:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">内雷特瓦河对岸观景台</h4>
                  <p className="text-gray-700 text-sm">位于城堡对面河谷岸边，距离约1公里，可完整捕捉城堡依山而建全貌，厚重城墙与清澈河流相互呼应。最佳时间：日出或日落时分</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">防御塔楼底层</h4>
                  <p className="text-gray-700 text-sm">可拍摄塔楼高大挺拔与城墙厚重，同时捕捉远处河谷风光，画面兼具军事氛围与自然美。最佳时间：上午11:00-12:00</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">拍照小贴士</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 最佳拍摄时间：清晨（8:30-10:30）和傍晚（17:00-18:00），光线柔和，游客较少</li>
                  <li>• 建议穿着纯色、简约风格衣物，如黑色、米白色、深蓝色，与古朴石砌建筑、红瓦民居形成对比</li>
                  <li>• 拍摄全景时可使用广角镜头，展现城堡宏伟布局与河谷壮阔风光</li>
                  <li>• 拍摄细节时可使用长焦镜头，突出城墙、塔楼、雕花等细节</li>
                  <li>• 山区风较大，拍摄时注意稳定设备，避免画面模糊</li>
                  <li>• 禁止拍摄清真寺内部隐私区域，遵守当地宗教习俗</li>
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
                      <span className="font-medium">波契泰利老城区</span>
                      <p className="text-sm text-gray-600">距离城堡约500米，步行10分钟。中世纪石板路、石砌民居、小型教堂和集市，氛围古朴静谧</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">内雷特瓦河河谷徒步路线</span>
                      <p className="text-sm text-gray-600">距离城堡约2公里，小众徒步路线，沿途河谷风光优美，全程约4公里</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">短途交通景点</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">莫斯塔尔老桥</span>
                      <p className="text-sm text-gray-600">距离城堡约30公里，打车30分钟，费用约25-30欧元。世界文化遗产，16世纪石砌拱桥</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">布拉加伊清真寺</span>
                      <p className="text-sm text-gray-600">距离城堡约15公里，打车20分钟，费用约15欧元。16世纪奥斯曼建筑，圆顶宣礼塔设计精美</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-medium">莫斯塔尔考古博物馆</span>
                      <p className="text-sm text-gray-600">距离城堡约32公里，打车35分钟，费用约30欧元。收藏波斯尼亚和黑塞哥维那南部出土文物，免费开放</p>
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
                    <h5 className="font-medium">波契泰利小镇</h5>
                    <p>距离城堡最近，步行即可抵达，小镇氛围静谧，多为当地传统石屋改造住宿，体验河谷乡村风情</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-medium">莫斯塔尔市</h5>
                    <p>距离城堡约30公里，住宿选择更多，配套完善，适合预算有限或喜欢热闹氛围游客，车程约30分钟</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">住宿类型推荐</h4>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">特色民宿</h5>
                    <p>波契泰利小镇有很多小众民宿，多由当地石屋改造，装修简约古朴，保留波斯尼亚和黑塞哥维那传统建筑特色，30-70欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">自助公寓</h5>
                    <p>设施齐全，适合家庭或多人出行，25-50欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">精品乡村酒店</h5>
                    <p>波契泰利小镇和莫斯塔尔市周边有少量精品酒店，装修融合波斯尼亚和黑塞哥维那传统元素与现代风格，55-100欧元/晚</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">经济型酒店</h5>
                    <p>莫斯塔尔市有多家性价比高的酒店，设施标准化，干净整洁，18-40欧元/晚</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">预订注意事项</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 波契泰利地区旅游旺季为5-9月，游客较多，建议提前1个月预订</li>
                  <li>• 选择可免费取消的房源，以便灵活调整行程</li>
                  <li>• 自驾出行需确认住宿周边停车场位置与收费标准（3-7欧元/天）</li>
                  <li>• 波契泰利小镇部分民宿位于山坡上，无电梯，携带大件行李需提前确认</li>
                  <li>• 春秋季（4-5月、9-10月）气候宜人，游客较少，住宿价格适中，是最佳时节</li>
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
                    <li>• 6-8月：旅游旺季，游客较多但天气最佳</li>
                    <li>• 11-次年2月：旅游淡季，游客稀少，适合喜欢静谧氛围</li>
                    <li>• 上午9:00-11:30：光线柔和，游客较少，便于拍摄</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">参观注意事项</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 城堡内路面多为石板路和台阶，部分路段较滑，建议穿舒适的防滑步行鞋</li>
                    <li>• 夏季山区紫外线较强，需携带遮阳帽、防晒霜与饮用水</li>
                    <li>• 参观清真寺时，需尊重当地宗教习俗，脱鞋进入，女性需佩戴头巾</li>
                    <li>• 冬季山区气温较低，部分路段可能结冰，建议携带保暖衣物</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">特色体验</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 登上主塔楼顶层，360度俯瞰城堡、老城区和内雷特瓦河河谷全景</li>
                    <li>• 漫步老城区街巷，感受中世纪石砌红瓦民居的古朴风情</li>
                    <li>• 参观奥斯曼清真寺，了解多元文化交融的历史印记</li>
                    <li>• 在防御塔楼俯瞰周边风光，感受军事城堡的庄严厚重</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">实用信息</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 当地货币：可兑换欧元或波斯尼亚和黑塞哥维那马克，部分地方支持欧元</li>
                    <li>• 语言：波斯尼亚语为主，旅游区英语基本通行</li>
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
