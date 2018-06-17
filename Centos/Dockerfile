FROM centos:latest

RUN yum install -y https://centos7.iuscommunity.org/ius-release.rpm
RUN yum -y update
RUN yum install -y python36u python36u-libs python36u-devel python36u-pip
RUN yum install -y vim

CMD ["/usr/sbin/init"]
