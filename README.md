 
 
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
* [:camera: Versiyon Videoları](#camera-versiyon-videoları)


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
[mobys plan](https://github.com/users/ultimate-dev/projects/4)

# :star: Sistem Planı
![Sistem Planı](https://github.com/ultimate-dev/mobys/blob/main/mobys-docs/sistem-yapisi.png)

# :bar_chart: SWOT Analizi
![SWOT Analizi](https://github.com/ultimate-dev/mobys/blob/main/mobys-docs/swot-analizi.jpg)

# :hash: Teknoloji Hazırlık Seviyeleri

###  :one: THS1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

###  :two: THS2
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

###  :three: THS3
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

###  :five: THS4
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

###  :four: THS5
...

###  :six: THS6
...

###  :seven: THS7
...

###  :eight: THS8
...

### :nine:  THS9
...

## :bomb: Toplantılar

1. ...
2. ...
3. ...
4. ...
5. ...
6. ...
7. ...
8. ...
9. ...
10. ...




