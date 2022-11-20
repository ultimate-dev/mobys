 
 
 <br />
<div align="center">
  <a href="[https://github.com/othneildrew/Best-README-Template](https://github.com/ultimate-dev/mobys)">
   <img src="https://github.com/ultimate-dev/mobys/blob/main/mobys-docs/logo.png" width="160" height="160"  />
  </a>

  <h1 align="center">Fırat MOBYS - Mermer Ocağı Bilgi Yönetim Sistemi</h1>

  <p align="center">
    :warning: <b>v0.8(Alfa)</b>
  </p>
</div>



 

Mermer Ocağı Bilgi Yönetim Sistemi (MOBYS), Mermer bloğu satışı yapmakta olan firmalarının mermer bloklarını satıcılarla kolay ve güvenilir şekilde satış yapabilmelerini sağlayacak bir platform oluşturmaktır. Bunun için yapay zeka, görüntü işleme ve blockchain teknolojileri kullanılmıştır.



* [:fire: Geliştiriciler](#fire-geliştiriciler)
* [:file_folder: Dosya Sistemi](#file_folder-dosya-sistemi)
* [:calendar: İş Planı](#calendar-i̇ş-planı)
* [:star: Sistem Planı](#star-sistem-planı)
* [:bar_chart: SWOT Analizi](#bar_chart-swot-analizi)
* [:hash: Teknoloji Hazırlık Seviyeleri](#hash-teknoloji-hazırlık-seviyeleri)
* [:bomb: Toplantılar](#bomb-toplantılar)


# :fire: Geliştiriciler
| Şükrü Taha BIYIK | Öğrenci Numarası | Görevler |
| :--- | :--- | :--- |
| [Şükrü Taha BIYIK](https://github.com/ultimate-dev) | 195542006 | Backend |
| [Burak ÖZDEMİRTAŞ](https://github.com/burakozdemirtas) | 205541302 | Frontend |

# :file_folder: Dosya Sistemi
* mobys-web
  1. NPM Paketlerin İndirilmesi
     ```sh
     yarn install
     ```
  2. Proje Ayar Dosyalarının Yapılandırılması `configs.ts`
     ```sh
     export const APP_NAME = "Fırat MOBYS";
     export const OWNER_NAME = "Mermer Ocağı Bilgi Yönetim Sistemi";
     export const API_URL = "http://localhost:2323";
     ```
  3. Projenin Başlatılması
     ```js
     yarn start
     ```

* mobys-app
  1. NPM Paketlerin İndirilmesi
     ```sh
     expo install
     ```
  2. Proje Ayar Dosyalarının Yapılandırılması `configs.ts`
     ```sh
     export const API_URL = "http://127.0.0.1:2323/";
     ```
  3. Projenin Başlatılması
     ```js
     expo start
     ```
* mobys-api
  1. NPM Paketlerin İndirilmesi
     ```sh
     yarn install
     ```
  2. Proje Ayar Dosyalarının Yapılandırılması `.env`
     ```sh
     DATABASE_URL=mysql://admin:123456@127.0.0.1:8889/mobys
     PORT=2323
     SECRET_KEY=marble23
     BASE_URL=http://127.0.0.1:2323
     SERVICE_URL=http://127.0.0.1:5000/
     ```
  3. Projenin Başlatılması
     ```js
     yarn dev
     ```
* mobys-service
  1. Proje Ayar Dosyalarının Yapılandırılması `configs.py`
     ```sh
     FLASK_CONFIG = {}
     APP_CONFIG = {
      'debug': True,
      'host': '127.0.0.1',
      #'host': '192.168.137.74',
      'port': 5000,
     }
     ```
  2. Projenin Başlatılması
     ```js
     python3 app.py
     ```

# :calendar: İş Planı
[![Sistem Planı](https://github.com/ultimate-dev/mobys/blob/main/mobys-docs/is-plani.png)](https://github.com/users/ultimate-dev/projects/4)

# :star: Sistem Planı
![Sistem Planı](https://github.com/ultimate-dev/mobys/blob/main/mobys-docs/sistem-yapisi.png)

# :bar_chart: SWOT Analizi
![SWOT Analizi](https://github.com/ultimate-dev/mobys/blob/main/mobys-docs/swot-analizi.jpg)

# :hash: Teknoloji Hazırlık Seviyeleri

###  :one: THS1
Projemizde mermer kalitesi, deseni, kırığı, renk seçimi gibi tespit işlemleri yapılmıştır. Öncelikle bir bilirkişiden mermer kalitesi analizi için gerekli bilgiler alınmıştır. Bu bilgiler doğrultusunda proje gelişiminin sağlanması hedeflenmiştir. Projenin ileri seviyelere yükselmesi için çeşitli desenler araştırılıp, geliştirilmiştir. Mermer kalitesinde mermerin kalite metriklerine özel filtreler uygulanmaya çalışılmıştır. Mermerin renk tespitinde mermer üzerindeki renk çoğunluğu baz alınıp, çoğunlukta olan rengi seçme hedeflenmiştir. Mermer desen tespitinde ise mermerde tekrarlı devam eden desenlerin seçilmesi baz alınmıştır.  Mermer kırığında ise mermerin kırığının derecesi, kırık görüntüsünün filtreler ile ortaya çıkarılması hedeflenmiştir. 

###  :two: THS2
Bir mermerin kalitesi genellikle; o mermerin üzerindeki fosiller ve lekeler kadar, mermerin yoğunluğuna ve büyüklüğüne bağlı olarak değişebilmektedir.  Çalışmamızda mermer kalitesinin sınıflandırılmasına ilişkin çeşitli klasik yaklaşımlar veya yöntemler ortaya konulmuştur. İlgili çalışmaların çoğunda mermer levhalarının fotoğraflarının kalite sınıflandırma sistemlerine dâhil edilmeden önce;  Ortanca(Median) Süzgeç gibi farklı filtrelerle ya da çatlaklık özelliklerinin çıkartılması gibi diğer görüntü ön-işleme sürecinden geçirildiği bilinmektedir.  Projemizde ortanca süzgeç fonksiyonu kullanılıp, mermer kırıklarının netleştirilip ortaya çıkarılması sağlanmıştır. Şekil 1’de ortanca (median) süzgeç filtresi gösterilmiştir.
![image](https://user-images.githubusercontent.com/33163650/202729857-b2e5450b-c8c1-4f30-9037-0f8c54050fbe.png)
<p align="center"> <b>Şekil 1.</b> Ortanca (median) süzgeç filtresi </p>

Bu çalışmada mermerlerin görsellerine ait resimlerden mermerlerdeki yüzeyler sorunların çözümlenmesi hedeflenmiştir. Çalışmamız ile mermerdeki, çatlaklık, desen, tabakalaşma, çatlak boyut açıklığı, çatlak boyut kapalılığı, mineral yapı, model, mermer kalite sınıfı, renk, homojenlik gibi tespitler mermer sınıflandırılmasına dahil edilmiştir.  Projemizde evrişim (convolution) kenar bulma fonksiyonlarından kirsch operatörü kullanılmıştır. Şekil 2’de Evrişim (convulution) kenar bulma fonksiyonlarından kirsch operatörü gösterilmiştir.

![image](https://user-images.githubusercontent.com/33163650/202730284-193653ed-7659-4ee4-a656-86da437615cd.png)
<p align="center"> <b>Şekil 2.</b> Evrişim (convolution) kenar bulma fonksiyonlarından kirsch operatörü </p>

Farklı mermer kalitesine ait mermer fotoğraflarını içeren bir görsel veri seti kullanılarak çalışmada yüksek düzeyde doğruluk oranları elde edilmiştir. Projemizde data setteki görseller Laplacian çekirdeği kullanılarak süzgeçlenmiştir. Aşağıdaki görselde Laplacian çekirdeği kullanılarak süzgeçlenen örnek fotoğrafı görebilirsiniz.  Bu projede algoritmalar kullanılarak, mermer levhalarının otomatik olarak sınıflandırılmasını yapan bir sistem ortaya konulmuştur.  Şekil 3’de Laplacian filtresi gösterilmiştir.

![image](https://user-images.githubusercontent.com/33163650/202730459-1b9530bf-bc4d-41fb-972d-581d4207e5ea.png)
<p align="center"> <b>Şekil 3.</b> Orijinal imgenin Laplacian filtresi ile filtrelenip çıkan sonuç görseli </p>

###  :three: THS3
Bu çalışmada; mermer endüstrisinde yakın gelecekte insan müdahalesini ve insan iş gücü gerekliliklerini minimize edebilecek şekilde, en az mermer eksperlerinin ortaya koyduğu düzeyde doğru sınıflandırmayı, çok hızlı ve etkin bir şekilde, otomatikleştirilmiş olarak yapabilecek yeni bir mermer sınıflandırması modeli ortaya konulmuştur. Bugüne kadar literatürde ki bilinen tüm çalışmalardan farklı olarak; mermer kalitesinin çoklu sınıflandırmasında evrişimsel sinir ağlarının bu düzeyde başarılı sonuç vermesi ve evrişimsel sinir ağlarının doğruluk oranını, aşırı uyumu da engelleyecek şekilde arttıran bazı veri artırım tekniklerinin özgün bir biçimde kullanımı, bu çalışmanın önemini ortaya koyan yeni bir yaklaşımdır.

Bu çalışmada kullanılan farklı filtreler ile mermer fotoğraflarının filtrelenmesi ile ortaya çıkan yapı Şekil 4’de gösterilmiştir.

![image](https://user-images.githubusercontent.com/33163650/202730938-94426878-d1b4-423d-884d-c77099307048.png)
<p align="center"> <b>Şekil 4.</b> Farklı algoritmalar ile filtrelenen mermer fotoğrafının ortaya çıkan yapısı </p>

Şekil 4’de de gösterildiği gibi algoritmamız yüzeysel işlevleri yakalamıştır. Yüzeysel sorunların doğruluk oranını arttırmak amacıyla; çalışmamızda çeşitli filtrelerin denenmesine karar verilmiştir. Bu filtrelerin en iyi sonuç verenleri kullanılmıştır. Bu çalışmada; mermer levhalarının görselleri kullanılarak mermer kalitesinin sınıflandırılmasında yeni bir model ve yaklaşım ortaya konulmuştur.  Çalışmamızın mermer piyasasına olan katkısı; mermer kalitesinin çoklu sınıflandırılmasında özel olarak tasarlanmış bir evrişimsel modelin mermerleri ek bir iş gücü olmadan, doğruluk payı yüksek olarak sınıflandırmasıdır. Mermer fotoğraflarındaki yüzeysel sorunların iş gücü gerektirmeden, bir ölçüm veya gözleme gerek duymadan somut bir şekilde ortaya koyulmasıdır.

###  :four: THS4
Bu çalışmada örnekler A, B ve C kalite sınıfı olarak sınıflandırılmaya çalışılmıştır. Sınıflandırma başarısı için belirli doğruluk kriterleri kullanılmıştır. Yöntem olarak Derin Öğrenme Algoritmalarından biri olan konvolüsyonel sinir ağı kullanılmaktadır. Derin Öğrenme ile bir nesnenin diğerinden ayırt edilmesini sağlayan çizgi, kontur, köşe, renk ve doku gibi basit ana bileşenlerin hesaplanması ve ayrıca bu bileşenlerin sonraki katmanların daha karmaşık bileşenleriyle bağlantısının hesaplanmasına denir. 

Bir görüntüye evrişim katmanı uygulandığında, görüntüden belirli özellikler elde edilebilir. Bu işlem, görüntü üzerindeki matematiksel işlemli bir filtre ile işlenerek gerçekleştirilir. Evrişim katmanının matematiksel bir işlemi Şekil 5’de verilmiştir.

![image](https://user-images.githubusercontent.com/33163650/202731291-b57a4c2c-c5c7-41da-9935-0755501a65de.png)
<p align="center"> <b>Şekil 5.</b> Evrişim işlemi(a) filtre, görüntünün matrisi (b), evrişim sonucu (c) </p>

Havuzlama katmanları ile sayısı büyük ölçüde artırılan özellikler, basit bir işlem kullanılarak azaltılabilir. Maksimum havuzlama işlemi, filtrede belirli bir boyuta sahip en büyük öğeyi seçer ve diğerlerini seçmez. Böylece, yalnızca en yüksek değerlere sahip öğeler, belirli adımlarla belirli pencere boyutuna göre seçilir ve diğerleri seçilir.

Tamamen bağlı katman, klasik yapay sinir ağlarının yapısını kapsar, gelen verileri toplar ve aktarır. Genellikle bir sonraki katman softmax katmanıdır ve sınıf etiketini en yüksek değerli sonuca göre belirleyen sınıflandırma katmanı eklenir. Şekil 6’da klasik bir Derin Öğrenme ağı verilmiştir.

![image](https://user-images.githubusercontent.com/33163650/202731518-f645e0d9-02cb-4210-b60f-6d601d901143.png)
<p align="center"> <b>Şekil 6.</b> Klasik bir Derin Öğrenme ağı </p>

Projemizde renk tespiti için Sklearn kütüphanesinden KMeans kullanılmıştır.  Renk tonlarının yüzdelikleri alınmıştır. En yüksek yüzdeli 3 renk tonu seçilip, ortaya konulmuştur. Şekil 7’de KMeans ile renk yüzdesi sonucu gösterilmiştir.

![image](https://user-images.githubusercontent.com/33163650/202731675-a30df7f6-f6e9-4dd8-ba6d-9426fcdf1dbe.png)
<p align="center"><b>Şekil 7.</b> KMeans ile renk yüzdesi sonucu gösterilmesi </p>

Projemizde 8 ayrı filtre kullanılarak sonuçların doğruluk yüzdesinin artması hedeflenmiştir. Draw Contours ile kontur çizimleri yapılır kırık bulma hedeflenmiştir. Şekil 8’de Draw Contours yapılmıştır.

![image](https://user-images.githubusercontent.com/33163650/202731825-33fded47-e251-48ac-80be-0efc7cb009c1.png)
<p align="center"> <b>Şekil 8.</b> Draw Contours ile kontur çizimi </p>

## :bomb: Toplantılar

<b>1.Toplantı(24.10.2022):</b> Bu sprintimizde proje ile alakalı fikir alışverişi yapıldı. Proje ile ilgili bilir kişiden mermer üzerine kalite bilgileri, önem bilgileri, desenlerin neye göre belirlendiği, renklerin neye göre belirlendiği, fiyat konusunda baz alınacak şeyler, kaliteli bir mermerin nasıl belirleneceği öğrenildi. Yapacağımız şeyler konuşulup, bir yol haritası oluşturuldu. Projelerimizde neler olacağı, neler tespit edileceği konuşuldu. Projemizin hangi dille yazılacağı, hangi platformda yayınlanacağı kararlaştırıldı. Fikir alışverişinde ilerlememiz ile alakalı detaylar konuşuldu. Rakip analizi yapılıp eksikler ve fazlalar tartıldı. Kullanacağımız desenlere yönelik fonksiyonlar düşüldü. Kullanacağımız desenler konuşulup, seçeneklerimizi arttırdık.  </br> </br>
Projemizde görev dağılımını eşit yapmak için belirli alanlar seçilip dağıtımı sağlandı. Diğer bir sprinte kadar yapacaklarımız konuşuldu.  Mermer yapıları için hangi   filtrelerin uygun olabileceği konuşuldu. Mermerler için daha önceden yazılmış makalelerin araştırılması için öneri sunuldu. Mermer desen tespiti gibi tespitlerin       daha önce nasıl yapıldığının araştırılması kararlaştırıldı.  Dataset bulmak için herkesin araştırmasının gerektiği belirtildi. Ekipteki herkesin araştırma yapacağı     alanlar belirlenip toplantı sonlandırıldı.

<b>2.Toplantı(31.10.2022):</b> Ekipçe toplanılıp herkesin görev dağılımında ki görevlerinin yerine getirilip getirilmediği kontrol edildi. Yapılan araştırmalar sonucu ortaya konulan araştırma konuları üzerine beyin fırtınası yapıldı. Mermer projemiz için kullanılacak filtreler için beyin fırtınası yapılıp, kullanılacak filtreler belirlendi. Mermer projemiz için yapılacak tespitler için uygun olanları seçilip, ekipçe kullanılacak tespitler kesinleşti.  Filtre ve tespitler için görev dağılımı yapıldı. Projemizin daha da gelişmesi için beyin fırtınası yapıldı.</br> </br>
Yapılan çalışmalar sonucu, desen ve tespitler için proje kodlarının denenmesi ve diğer bir sprintte gösteriminin yapılmasına karar kılındı. Bulunan data setlerin kontrolü yapılıp, hangi data setin daha uygun olduğu düşünülüp uygun olanı seçildi. Bulunan tespitler açıklandı. Renk tespiti, desen tespiti, kırık tespiti uygun görülüp kullanılması karar kılındı. Bu tespitlerin geliştirilmesi için diğer bir sprinte kadar kodlanıp data set üzerinde denenilmesi, çıkacak sonuçların gösterilmesi ve sunulması karar kılındı. Renk tespiti için renklerin nasıl seçileceği düşünülüp, en yüksek yüzdeli rengin belirlenip projede seçilmesi karar kılındı. Desen tespitinde ise tekrar eden desenin belirlenip sonuç olarak alınması karar kılındı.

<b>3.Toplantı(07.11.2022):</b> Ekipçe toplanılıp sprinte başlandı. Kullanılan filtrelerin, tespitlerin özelleştirilmiş kodlarına bakıldı ve bu sprintte kodların birleştirilmesi kararı alındı. Kodlarımızın birleştirilip web ortamına aktarılması kararı kılındı. Web ve mobil platformda çalışması kararlaştırıldı. Bu platformlar için React Native dilinin kullanılması seçildi. React bilmeyenler için diğer bir sprinte kadar React dili için kalan zamanı eğitim ile geçirmesi önerildi. </br> </br>
Kullanılan tespitlerin doğrulukları kontrol edildi. Renk tespitinin doğruluk yüzdesi kontrol edildi ve renk seçimi incelendi. Desen tespitinin hangi desenleri gördüğü ve doğruluk yüzdesi tespit edildi. Kırık tespiti için kullanılan filtrelerde kırıkların belirginliği ve kırık görme hassasiyeti incelenip, doğruluk yüzdesi belirlendi. 

<b>4.Toplantı(14.11.2022):</b> Bu sprintte kodların birleştirilmiş hali görüldü. Web ortamına aktarılan kodların çalışması gözlendi. Web ortamında olan eksikler not edilip, geliştirilmesi için fikir alışverişi yapıldı. Web ortamındaki algoritmaya eklenen data set görselindeki tespitlerin doğruluğu gözlendi. Proje için her bir sprintte yazılan teknoloji hazırlık seviyesi notları güncellendi. Web ortamının kullanıcı dostu olması için geliştirmeler düzenlendi. Ekibimizin fikirleri not edilip diğer bir sprint için düzenlemelerin detayları not edildi.</br> </br>
Projemizin mobil ortamı kontrol edildi. Mobil çalışmanın detayları konuşulup ek olarak nelerin eklenebileceği düşünülüp fikirler ortaya atıldı. Mobil uygulamanın fonksiyonlarına neler ekleneceği, uygulamada eksikliklerimiz konuşuldu. Marka ismimiz kesinleştirilip, markalaşma sürecine başlanıldı.  Ortaya çıkan projenin dökümantasyonları git-hub üzerinden güncellendi.  Ortaya bir çalışır proje konuldu.





